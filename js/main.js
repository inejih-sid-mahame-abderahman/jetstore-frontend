  let jets=document.getElementById('jets');
   async function fetchJets(){
    const { data, error } = await supabaseClient
    .from("jet")  
    .select("*");
    if (error) {
        console.error("❌ Error:", error.message);      
    } else {
        console.log("✅ Connected!");
       
        data.forEach(jet => {
            let jetCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${jet.image_url}" class="card-img-top" alt="${jet.name}">
                    <div class="card-body">
                        <h5 class="card-title">${jet.name}</h5>
                         <h5 class="card-title">${jet.country}</h5>
                        <p class="card-text">${jet.type}</p>
                        <p class="card-text"><strong>Price: $${jet.price}</strong></p>
                    </div>
                </div>
            </div>`;
            jets.innerHTML += jetCard;
        }
        );}
    }   
fetchJets();