GO := go

all: cmd/main.go
	${GO} build cmd/main.go

run: all
	${GO} run cmd/main.go
