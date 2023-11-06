function recursive (max) {
    console.log(max);
    if (max >= 1000000) return;
    max++;
    recursive(max);
}

recursive(1);