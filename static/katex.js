const macros = {
    "\\C": "\\mathbb{C}",
    "\\N": "\\mathbb{N}",
    "\\Q": "\\mathbb{Q}",
    "\\R": "\\mathbb{R}",
    "\\Z": "\\mathbb{Z}",
    "’": "'"
};
document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.getElementById("content"), {
        strict: false,
        delimiters: [
            {"display": true,"left": "$$","right": "$$"},
            {"display": true,"left": "\\[","right": "\\]"},
            {"display": true,"left": "\\begin{equation}","right": "\\end{equation}"},
            {"display": true,"left": "\\begin{equation*}","right": "\\end{equation*}"},
            {"display": true,"left": "\\begin{align}","right": "\\end{align}"},
            {"display": true,"left": "\\begin{align*}","right": "\\end{align*}"},
            {"display": true,"left": "\\begin{alignat}","right": "\\end{alignat}"},
            {"display": true,"left": "\\begin{alignat*}","right": "\\end{alignat*}"},
            {"display": true,"left": "\\begin{gather}","right": "\\end{gather}"},
            {"display": true,"left": "\\begin{CD}","right": "\\end{CD}"},
            {"display": false,"left": "$","right": "$"},
            {"display": false,"left": "\\(","right": "\\)"}
        ],
        macros});})
