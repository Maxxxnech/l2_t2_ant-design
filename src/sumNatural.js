export default function(n){
    if(typeof n !== 'number' || (n^0) !== n || n < 1){
        console.log(typeof n + ' ' + (n^0))
        return <span style={{color:'red'}}>Пожалуйста, используйте только натуральные числа!</span>
    }
    return n * (n + 1) / 2;
}