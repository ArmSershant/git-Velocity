        function imagefun() {
            var Image_Id = document.getElementById('getImage');
            if (Image_Id.src.match("content4.png")) {
                Image_Id.src = "images/content1.png";
            }
            else  {
                Image_Id.src = "images/service1.png";
            }
        }  