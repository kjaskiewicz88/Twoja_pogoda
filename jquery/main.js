$(function(){
    function jSon(){
        $.getJSON('https://danepubliczne.imgw.pl/api/data/synop',
        function(data){

            $.each(data, function(index, element) {
            const tr = $(`<tr></tr>`);    
            const text = $('<td></td>');
            const temp = $(`<td></td>`);
            const hpa = $('<td></td>');
            const wind = $('<td></td>');
            const wetness = $('<td></td>');
            const date = $('<td></td>');
            $('#pogoda').append(tr);
            $(tr).append(text);
            $(tr).append(temp);
            $(tr).append(hpa);
            $(tr).append(wind);
            $(tr).append(wetness);
            $(tr).append(date);
           

            text.append(`${element.stacja}`)
            temp.append(`${element.temperatura} C`)
            if(element.cisnienie==null){
                 "brak"
            }else{
                 hpa.append(`${element.cisnienie} hpa`)
            }
            wind.append(`${element.predkosc_wiatru} m/s`)
            wetness.append(`${element.wilgotnosc_wzgledna}`)
            date.append(`${element.data_pomiaru}`)
            })
                       
        })
       
    }
    jSon()

        $("input").on("keyup",function(){
        let value = $(this).val().toLowerCase();
        $("#pogoda tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        
        })
    });
});


