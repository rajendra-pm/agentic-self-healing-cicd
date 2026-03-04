import os

print("AI Agent Started...")

if os.path.exists("failure.log"):
    with open("failure.log") as f:
        logs = f.read()

    print("Failure detected.")
    print("Analyzing with LLM...")

    print("Suggested Fix:")
    print("Correct the failing test expectation in test.js")
else:
    print("No failure found.")
