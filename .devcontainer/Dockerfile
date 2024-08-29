FROM ubuntu:20.04

# 기본 도구 및 의존성 설치
RUN apt-get update && apt-get install -y \
    curl \
    git \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# NVM 설치
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 12.18.3

RUN mkdir -p $NVM_DIR \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# NVM 및 Node.js 환경 변수 설정
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# 작업 디렉토리 설정
WORKDIR /workspace

# 기본 셸을 bash로 설정
SHELL ["/bin/bash", "-c"]
