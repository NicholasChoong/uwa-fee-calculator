$(() => {
    let count = 0;
    $(".increase-button").on("click", () => {
        count++;
        $(".counter").html(count.toString());
        console.log(count);
    });
});
