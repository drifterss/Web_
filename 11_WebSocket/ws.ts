import ws from 'ws'

const wss = new ws.Server({port:8080},()=>{
    console.log('scoket已启动')
})

wss.on('connection',(socket) => {
    console.log('客户端连接成功');
    // socket.on 接收服务端消息
    socket.on('message',(e)=>{
        // 接收到了客户端的消息
        console.log(e.toString());

        // 广播
        wss.clients.forEach((client) => {
            client.send('我是服务端，发送后的消息为'+e.toString())
        })
        
        // 把接收到的客户端消息返回回去
        // socket.send('我是服务端，发送后的消息为'+e.toString())
    })
})