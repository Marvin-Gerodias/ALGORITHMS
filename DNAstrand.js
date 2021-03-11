function DNAStrand(dna) {
    var symbols = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' }
    dna = dna.replace(/[ATGC]/g, m => symbols[m]);
    return dna;
}

console.log(DNAStrand("AAAA")); // return "TTTT"
console.log(DNAStrand("ATTGC")); // return "TAACG"
console.log(DNAStrand("GTAT")); // return "CATA"

//replace() and mapping function