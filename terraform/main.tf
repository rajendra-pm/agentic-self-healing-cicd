provider "aws" {
  region = "ap-south-1"
}

resource "aws_s3_bucket" "ci_logs" {
  bucket = "agentic-ci-logs-demo"
}
