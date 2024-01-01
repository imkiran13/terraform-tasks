provider "aws" {
  region = "us-east-1"
}

provider "vault" {
  address = "http://52.23.230.170:8200"
  skip_child_token = true

  auth_login {
    path = "auth/approle/login"

    parameters = {
     role_id = "378aa24b-c874-8195-8ebd-b6cefe9f7fcc"
      secret_id = "a9d79938-1faa-6bd3-a3a8-eb8784add318"
    }
  }
}

data "vault_kv_secret_v2" "example" {
  mount = "kv" // change it according to your mount
  name  = "test-secret" // change it according to your secret
}

resource "aws_instance" "my_instance" {
  ami           = "ami-053b0d53c279acc90"
  instance_type = "t2.micro"

  tags = {
    Name = "test"
    Secret = data.vault_kv_secret_v2.example.data["username"]
  }
}
