		
		var screenWidth = screen.width;
		if(screenWidth < 1024){
			alert("use desktop to see the effect");
		}
        let left = document.querySelector('.left');
        let content = document.querySelector('.leftContent');
        let protos = document.querySelectorAll('.proto');

        left.addEventListener('mousemove', (event) => {
            let move1 = (event.clientX * 0.05);
            let move2 = (event.clientX * 0.003);
            content.style.transform = `translateX(-${move2}%)`;

            protos.forEach((proto) => {
                proto.style.transform = `translateX(${move1}%)`;
            })
        })