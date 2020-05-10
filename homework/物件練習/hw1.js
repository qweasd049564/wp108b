var c2e={狗:'dog',貓:'cat',一隻:'a',追:'chase',吃:'eat'}

function mt(c)
{
    e=[]
    for(let i in c)
    {
        var cword=c[i]
        var eword=c2e[cword]
        e.push(eword)
    }
    
    return e
}

console.log(mt(process.argv.slice(2)))