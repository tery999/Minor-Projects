function something () {
    const mechStats = {
        strength:10,
        confidence:15,
        ability:20,
        perception:25
    }
    
    let key = Object.keys(mechStats).reduce((key, v) => mechStats[v] < mechStats[key] ? v : key);
    let high = Object.keys(mechStats).reduce((high, v) => mechStats[v] > mechStats[high] ? v : high);
    console.log(key)
    console.log(high)
}

something();