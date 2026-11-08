// الأسئلة: answer هو رقم الإجابة الصحيحة (يبدأ من 0)
const categories = {
  general: [
    { q: "ما عاصمة المملكة العربية السعودية؟", options: ["الرياض", "جدة", "الدمام", "مكة"], answer: 0 },
    { q: "كم عدد أيام الأسبوع؟", options: ["5", "6", "7", "8"], answer: 2 },
    { q: "ما أكبر كوكب في المجموعة الشمسية؟", options: ["الأرض", "المشتري", "المريخ", "زحل"], answer: 1 },
    { q: "كم عدد القارات في العالم؟", options: ["5", "6", "7", "8"], answer: 2 },
    { q: "ما أكبر محيط في العالم؟", options: ["الأطلسي", "الهندي", "المتجمد الشمالي", "الهادئ"], answer: 3 }
  ],
  sports: [
    { q: "كم عدد لاعبي فريق كرة القدم داخل الملعب؟", options: ["9", "10", "11", "12"], answer: 2 },
    { q: "كل كم سنة تقام كأس العالم؟", options: ["سنتين", "4 سنوات", "5 سنوات", "6 سنوات"], answer: 1 },
    { q: "ما الرياضة التي تُلعب بالمضرب والريشة؟", options: ["التنس", "الريشة الطائرة", "الاسكواش", "البادل"], answer: 1 },
    { q: "كم عدد الحلقات في شعار الألعاب الأولمبية؟", options: ["4", "5", "6", "7"], answer: 1 },
    { q: "كم مدة الشوط الواحد في كرة القدم؟", options: ["30 دقيقة", "45 دقيقة", "60 دقيقة", "90 دقيقة"], answer: 1 }
  ],
  web: [
    { q: "أي لغة تستخدم لتنسيق صفحات الويب؟", options: ["HTML", "CSS", "JavaScript", "Python"], answer: 1 },
    { q: "أي لغة تستخدم لبناء هيكل الصفحة؟", options: ["HTML", "CSS", "JavaScript", "SQL"], answer: 0 },
    { q: "أي لغة تجعل الصفحة تفاعلية؟", options: ["HTML", "CSS", "JavaScript", "XML"], answer: 2 },
    { q: "ما الوسم المستخدم للعنوان الرئيسي؟", options: ["<p>", "<h1>", "<a>", "<img>"], answer: 1 },
    { q: "ما الوسم المستخدم لإنشاء رابط؟", options: ["<img>", "<p>", "<a>", "<div>"], answer: 2 }
  ],
  mate:[
    { q: "469 × 3 ", options: ["1200", "1807", "2000", "1407"], answer: 3 },
    { q: "2973 × 3", options: ["8919", "9090", "7040", "6020"], answer: 0 },
    { q: "94 × 4", options: ["98", "360", "376", "780"], answer: 2 },
    { q: "5 × 0", options: ["0", "5", "25", "10"], answer: 0 },
    { q: "2×2", options: ["1", "6", "16", "4"], answer: 3 }
  ],
  chem:[
    { q: " ما عدد الذري للعنصر الذي يحتوي على 8 بروتوونات ", options: ["6", "8", "10", "16"], answer: 1 },
    { q: " ؟أي مما يعد تغيرا كيمائيا", options: ["انصهار الجليد", "تبخر الماء", "صدأ الحديد", "تقطيع الورق"], answer: 2 },
    { q: "ما الصيغة الكيميائية للماء؟ ", options: ["CO2", "H2O  ", "O2", "0=NaCl"], answer: 1 },
    { q: "إذا كانت قيمة الرقن الهيدروجيني (pH) لمحلول تساوي 3,فكيف يصنف؟",options: ["حمضي", "متعادل", "قاعدي", "لا يمكن تحديده"], answer: 0 },
    { q: "اي الجسيمات التالية يحمل شحنه كهرابائية سالبة؟", options: ["البروتين", "النوترون", "الألكترون","نواة الذرة"],answer: 2},
  ],
    Phy:[
    { q: "قطع طالب مسافه 150 مترا خلال 30 ثانية.\n ما سرعته المتوسطة؟", options: ["3 م/ث", "5 م/ث ", "10 م/ث ", "15 م/ث"], answer: 1 },
    { q: "ماذا يحدث لجسم ساكن عندما تؤثر عليه قوة محصله لا تساوي صفر", options: ["تبقى ساكنا", "تقل كتلته", "يبدأ بالتسارع", "تختفي الجاذبية"], answer: 2 },
    { q: "عندما تسقط كرة من ارتفاع, إلى أي نوع من الطاقه تتحول طاقة وضع الجاذبية تدرجيا ؟", options: ["طاقة كهربائية", "طاقة كيميائية", "طاقة حركية", "طاقة نووية"], answer: 2 },
    { q: "قطعة معدنية كتلتها 249 جراما وحجمها 80 سم.ما كثافتها", options: ["2 جم/سم", "3 جم/سم", "4 جم/سم", "6 جم/سم"], answer: 0 },
    { q: "لماذا تتمدد معظم المواد عند ارتغاع درجة حرارتها؟", options: ["لأن كتلتها تزايد", "لأن جسيماتها تختفي", "لأن جاذبيتها تقل", "لأن متوسط تباعد جسيماتها يزداد"], answer: 3 },
    ],
       bio :[
    { q: "ما العضبة المسؤولة عن إنتاج معطم الطاقه ATP في الخلايا حقيقه النواة؟", options: ["النواة", "الميتوكوندريا", "الرويبوسومات", "جهاز جولجي"], answer: 1 },
    { q: "أي الأوعية الدموية التاليه ينقل الدم من القلب الى أعضاء الجسم", options: ["الأوردة", "الشعيرات", "الشراين", "الأوعية اللمفاوية"], answer: 2 },
    { q: "ما العملية التي تستخدمفيها الناباتات ضوء الشمس لصنع الغذاء؟", options: ["التنفس الخلوي", "النتح", "البناء الضوئي", "التخمر"], answer: 2 },
    { q: "إذا كان الابوين يحمل الطراد الجيميي Aa والاخر aa,\n فما احتمال إنجاب فرد يحمل الطراد Aa?", options: ["25%", "50%", "75%", "100%"], answer: 1 },

    { q: "ما وظيفة خلايا الدم البيضاء", options: ["تقل الدم", " تجدلط الدم", "الدفاع عن الجسم ضد مسببيبات الأمراض", "تقل المواد الغذائية"], answer: 2 },
    ],
  moh: [
    { q: "أين ولد النبي محمد ﷺ؟", options: ["المدينة", "مكة", "الطائف", "الرياض"], answer: 1 },
    { q: "من أول زوجات النبي ﷺ؟", options: ["عائشة", "خديجة", "حفصة", "سودة"], answer: 1 },
    { q: "كم كان عمر النبي ﷺ عند نزول الوحي أول مرة؟", options: ["30", "35", "40", "45"], answer: 2 },
    { q: "إلى أي مدينة هاجر النبي ﷺ؟", options: ["الطائف", "المدينة", "جدة", "تبوك"], answer: 1 },
    { q: "ما اسم الغار الذي نزل فيه الوحي أول مرة؟", options: ["ثور", "حراء", "أحد", "بدر"], answer: 1 }
  ],
  sahaba: [
    { q: "من الصحابي الملقب بالفاروق؟", options: ["أبو بكر", "عمر بن الخطاب", "عثمان", "علي"], answer: 1 },
    { q: "من نام في فراش النبي ﷺ ليلة الهجرة؟", options: ["علي بن أبي طالب", "بلال", "خالد بن الوليد", "أبو هريرة"], answer: 0 },
    { q: "من الصحابي الملقب بسيف الله المسلول؟", options: ["عمر", "أبو عبيدة", "خالد بن الوليد", "سعد بن أبي وقاص"], answer: 2 },
    { q: "من أول الخلفاء الراشدين؟", options: ["عمر", "عثمان", "علي", "أبو بكر الصديق"], answer: 3 },
    { q: "من الصحابي الذي اشتهر بلقب ذي النورين؟", options: ["عثمان بن عفان", "عمر بن الخطاب", "بلال بن رباح", "أبو هريرة"], answer: 0 }
  ]
    
};
 

// نعرف القسم من الرابط (مثلا quiz.html?cat=web)
let cat = location.search.replace("?cat=", "");
if (!categories[cat]) cat = "general";
const questions = categories[cat];

let current = 0;
let score = 0;
let answered = false;

function showQuestion() {
  answered = false;
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("question-number").textContent = "السؤال " + (current + 1) + " من " + questions.length;
  document.getElementById("question-text").textContent = questions[current].q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  for (let i = 0; i < questions[current].options.length; i++) {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = questions[current].options[i];
    btn.onclick = function () {
      chooseAnswer(i, btn);
    };
    optionsDiv.appendChild(btn);
  }
}

function chooseAnswer(i, btn) {
  if (answered) return;
  answered = true;
  const correctAnswer = questions[current].answer;
         const buttons = document.querySelectorAll("#options .option");
         buttons.forEach(function (button) {
    button.disabled = true;
      });
  if (i === questions[current].answer) {
    score++;
    btn.className = "option correct";
    btn.style.backgroundColor = "#198754";
    btn.style.color = "white";
  } else {
    btn.className = "option wrong";
        btn.style.backgroundColor = "#dc3545";
    btn.style.color = "white";

  }

  document.getElementById("next-btn").style.display = "block";
}

document.getElementById("next-btn").onclick = function () {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
        document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score-text").textContent = "درجتك: " + score + " من " + questions.length;

  }


showQuestion();

function showResult() {


  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score-text").textContent =
    "درجتك: " + score + " من " + questions.length;


  let percentage = (score / questions.length) * 100;

  let message = "";

  // درجة عالية: 70% أو أكثر
  if (percentage >= 70) {

    message = "🏆 درجة عالية\nإبداعك اليوم ثمرة اجتهادك، استمر!";

  }

  // درجة متوسطة: من 50% إلى أقل من 70%
  else if (percentage >= 50) {

    message = "💙 درجة متوسطة\nأنت على الطريق الصحيح، وكل محاولة تقربك من هدفك.";

  }

  // درجة منخفضة: أقل من 50%
  else {

    message = "🌱 درجة منخفضة\nدرجتك لا تعني أنك فشلت، فالفشل جزء من رحلتك نحو النجاح.";

  }
};
  // عرض الرسالة داخل HTML
  document.getElementById("motivation-text").textContent = message;
}
showQuestion();