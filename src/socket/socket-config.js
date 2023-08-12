import io from "socket.io-client"

export const socketConnection = async () => {
  return io('/')
}