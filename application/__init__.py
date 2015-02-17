from flask import Flask, render_template

# Flask Instance & Config
app = Flask('application')

@app.route('/')
def index() :
    return render_template('index.html')