const retornaIndice = (nums, alvo) => {
	let res = []
	
	nums.forEach((nums, index) => {
		for (let j = index + 1; j < nums.length; j++) {
    	if (nums[j] == alvo - nums[index]) {
        res.push(index)
				res.push(j)
      }
    }
	})

	return res
}

console.log(retornaIndice([2, 7, 11, 15], 13))