const loadLeassons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then ((json) => displayLesson(json.data));
};

const removeActive=()=>{
    const lessonButtons = document.querySelectorAll(".lesson-btn");
    lessonButtons.forEach(btn=> btn.classList.remove("active"));
}

const loadLevelWord=(id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url).then(res => res.json())
    .then((data) =>{
        const clickBtn= document.getElementById(`lesson-btn-${id}`)
        removeActive();
        clickBtn.classList.add("active");
        displayLevelWord(data.data);
    });
};

const displayLevelWord=(words)=>{
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if(words.length == 0)
    {
        wordContainer.innerHTML = `
        <div class="text-center col-span-full font-medium font-bangla rounded-xl py-10 space-y-4 ">
        <img class="mx-auto" src="./assets/alert-error.png">
        <p class="text-xl  text-[#18181B80]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
          <h2 class="text-4xl font-bold font-bangla">নেক্সট Lesson এ যান</h2>
      </div>
        `;
        return;
    }

    for(let word of words)
    {
        const card = document.createElement("div");
        card.innerHTML =`
          <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
        <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
        <p class="font-semibold">Meaning /Pronunciation</p>
        <div class="text-2xl font-semibold font-bangla">${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"}/${word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি"}</div>

        <div class="flex justify-between items-center">
          <button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF20] hover:bg-[#1A91FF60]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF60]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
      </div>
        `;
        wordContainer.append(card);
    }
}

const displayLesson = (lessons) =>{
    const levelbtn = document.getElementById("level-btn");
    levelbtn.innerHTML = "";

    for(let lesson of lessons)
    {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML= `<button id= "lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})"
         class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
        </button>
        `

        levelbtn.append(btnDiv);
    }
};
loadLeassons();
