from flask import Flask, request, jsonify, send_from_directory
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from flask_cors import CORS


app = Flask(__name__, static_folder="sustainable-films-homepage/dist", static_url_path="")
CORS(app, origins=["http://localhost:5173"])
# Route to serve built React frontend
@app.route("/")
@app.route("/<path:path>")
def serve_react(path="index.html"):
    return send_from_directory(app.static_folder, path)

# LLaMA model setup (assumes Ollama is running on port 11434)
model = OllamaLLM(model="llama3")
template = """
Answer the question below, and make sure to keep it concise (under 100 words).

Here is the conversation history: {context}

Question: {question}

Answer:
"""
prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

# Backend chat endpoint
@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    question = data.get("question", "")
    context = data.get("context", "")
    if not question:
        return jsonify({"error": "No question provided."}), 400
    result = chain.invoke({"context": context, "question": question})
    return jsonify({"response": str(result)})

if __name__ == "__main__":
    app.run(debug=True, port=8000)  # not 5000, to avoid Ollama conflict
