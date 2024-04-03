FROM golang:1.21.6 as GO_BUILD
ENV GO111MODULE=on \
    GOPROXY=https://goproxy.cn,direct \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=arm64

WORKDIR /backend
COPY ./backend/ /backend/

RUN go build -o budgetplan .


#FROM node:21.6.1 as NODE_BUILD
FROM node:21.6.1
WORKDIR /app/frontend
ADD ./frontend/ /app/frontend/

ENV NODE_ENV production


RUN yarn build && yarn install


#FROM ubuntu:22.04
#LABEL authors="niceclark"

ENV TZ=Asia/Shanghai

#WORKDIR /app

COPY --from=GO_BUILD /backend/budgetplan /app/backend/
#COPY --from=NODE_BUILD /frontend/ ./frontend/


EXPOSE 3000
EXPOSE 8080

#CMD ["./backend/budgetplan"]
#ENTRYPOINT ["/dockerstartup/backend.sh", "/dockerstartup/frontend.sh"]

# 持续显示系统进程的动态信息
 ENTRYPOINT ["top", "-b"]