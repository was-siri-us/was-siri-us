

$(document).ready(function(){
    $.getJSON("projects.json", function (data) {
            const myGridContainer = $("#myProjectsGridContainer");
            $.each(data,function(key,project){
                const card = $('<div>').addClass("myProjectCard");

                //image container
                const pcimc = $('<div>').addClass("myProjectCardImageContainer");
                const img = $('<img>').attr("src",project.Thumbnail).attr("alt",project.Name);
                pcimc.append(img);


                //Card Body
                const cardBody = $('<div>').addClass("myProjectsCardBody mt-2");
                const cb = $('<div>').addClass('card-body');
                const title = $('<h5>').addClass('card-title text-light').text(project.Name);
                const desc = $('<p>').addClass('card-text text-light').text(project.Description);
                cb.append(title);
                cb.append(desc);
                cardBody.append(cb);

                const CardFooter = $('<div>').addClass("myProjectCardFooter")
                const cf = $('<div>').addClass("card-footer")
                $.each(project.Tags,function(key,tag){
                    const chip = $('<div>').addClass("chip").text(tag);
                    cf.append(chip);
                })
                CardFooter.append(cf);


                card.append(pcimc);
                card.append(cardBody);
                card.append(CardFooter);



                $(card).click(function (e) { 
                    e.preventDefault();
                    window.location.href = project.Href;
                });
                myGridContainer.append(card);
            })
        }
    );
})
console.log("Hello");
