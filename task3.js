function greet(name) {
    let result = 'Hello, '
    if (Array. isArray(name)
    ) {
        result += name[0] + 'and' + name[1]
    }else if (name) {
        result += name
    } else {
        result += 'my friend'
    }
        return result + '.'
    }
 
  const result = greet("bob");
  console.log(result)
  
const result2 = greet()
  console.log(result2)

  const result3 = greet(["Jill" , "Jane"])
  console.log(result3)
