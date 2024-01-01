terraform {
  backend "s3" {
    bucket         = "kiranpar-s3-demo-xyz" # change this
     region         = "us-east-1"
     key            = "kiran/terraform.tfstate"
    encrypt        = true
    dynamodb_table = "terraform-lock"
  
  }
}