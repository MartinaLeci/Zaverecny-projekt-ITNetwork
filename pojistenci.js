"use sctrict"

class NovyPojistenec{
    constructor(){
        const pojistenciLocalStorage = localStorage.getItem("Pojištenci");
        this.pojistenci = pojistenciLocalStorage ? JSON.parse (pojistenciLocalStorage) : [];
        this.jmenoInput = document.getElementById("jmeno");
        this.prijmeniInput = document.getElementById("prijmeni");
        this.vekInput = document.getElementById("vek");
        this.telefonInput = document.getElementById("telefon");
        this.ulozitButton = document.getElementById("ulozit");
        this.vypisElement = document.getElementById("tabulka");

        this.pripravitVypis();
    }
    
    pripravitVypis() {
        this.ulozitButton.onclick = () => {
            if (this.jmenoInput.value !== "" && this.prijmeniInput.value !=="" && this.vekInput.value !== "" && this.telefonInput.value !== "") {
            const pojistenec = new Pojistenec (this.jmenoInput.value, this.prijmeniInput.value, this.vekInput.value, this.telefonInput.value);
            this.pojistenci.push(pojistenec);
            this.ulozitPojistence();
            this.vypsatPojistence();
            } else {
                alert("Všechny položky jsou povinné")
            }
        }
    }

    ulozitPojistence(){
        localStorage.setItem("Pojištenci", JSON.stringify(this.pojistenci));
    }

    vypsatPojistence() {
    	this.vypisElement.innerHTML = "";
    	for (let i = 0; i < this.pojistenci.length; i++) {
		    const pojistenec = this.pojistenci[i];
		    this.vypisElement.innerHTML += `<tr>
                                                <td>${pojistenec.jmeno}</td>
                                                <td>${pojistenec.prijmeni}</td>
                                                <td>${pojistenec.vek}</td>
                                                <td>${pojistenec.telefon}</td>
                                            </tr>`;
	    }
    }
}

