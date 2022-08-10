

function paperRequirements(first, second , third){

    const firstBookPages   = 100 * first;
    const secondtBookPages = 200 * second;
    const thirdBookPages   = 300 * third;

    const totalPages = firstBookPages + secondtBookPages + thirdBookPages;
    return totalPages ;

}

const getTotalPages = paperRequirements(5, 7, 3);

console.log(getTotalPages);





