const capitalIncreaseCloze={
  "parts": [
    "회사가 돈을 받고 새 주식을 발행해 자금을 마련하는 것을 ",
    "라고 해요.<br><br>이때 새로 발행한 주식은 ",
    "라고 불러요.<br><br>다른 투자자들이 새 주식을 받고 내 주식 수는 그대로라면, 회사 전체에서 내가 차지하는 ",
    "은 낮아져요.<br><br>내 지분율이 낮아질 수 있다는 우려는 주가에 ",
    "로 작용할 가능성이 있어요."
  ],
  "words": [
    "유상증자",
    "신주",
    "지분율",
    "악재",
    "호재",
    "배당"
  ],
  "answer": [
    0,
    1,
    2,
    3
  ],
  "feedback": [
    "돈을 받고 새 주식을 발행해 자금을 마련하는 것은 유상증자예요.",
    "새로 발행한 주식은 신주예요.",
    "회사 전체에서 내가 가진 주식이 차지하는 비율은 지분율이에요.",
    "내 지분율이 낮아질 수 있다는 우려는 주가에 악재로 작용할 가능성이 있어요. 유상증자가 항상 주가 하락으로 이어지는 것은 아니에요."
  ]
};
const capitalTableCloze={
  "table": true,
  "parts": [
    "주식 수는 ",
    "가 되고, 한 주의 가격은 ",
    ", 전체 주식 가치는 ",
    "이에요."
  ],
  "words": [
    "40주",
    "30주",
    "10,000원",
    "40,000원",
    "400,000원",
    "1,600,000원"
  ],
  "answer": [
    0,
    2,
    4
  ],
  "feedback": [
    "새로 받는 30주에 기존 10주를 더하면 총 40주예요.",
    "주식 수가 4배가 되면 이론상 한 주의 가격은 4분의 1인 10,000원으로 조정돼요.",
    "40주 × 10,000원 = 400,000원이에요. 무상증자 전의 전체 가치와 같아요."
  ]
};
const capitalIncreaseQuestions=[
  {
    "short": "내 피자 조각은 그대로인데?",
    "title": "전체 피자에서 상헌이의 조각이 차지하는 비율은 어떻게 됐을까요?",
    "context": [
      "피자 한 판을 똑같이 10조각으로 나눴어요. 상헌이의 몫은 <strong>1조각</strong>이에요.",
      "같은 크기의 피자 한 판이 더 생겨 전체가 <strong>20조각</strong>이 됐어요. 새 조각은 다른 사람들이 가져갔고, 상헌이는 여전히 <strong>1조각</strong>을 갖고 있어요."
    ],
    "pizzaComparison": true,
    "options": [
      "늘었다",
      "그대로다",
      "줄었다"
    ],
    "correct": 2,
    "yes": "맞아요! 가진 조각은 1개 그대로지만, 전체가 10조각에서 20조각으로 늘어 비율은 <strong>10%에서 5%로 줄었어요.</strong> 유상증자에서도 새 주식을 다른 투자자들이 받으면, 참여하지 않은 기존 주주의 지분율은 낮아져요.<br><br><span class=\"small\">지분율이 줄었다고 보유 주식의 가치도 반드시 절반이 되는 것은 아니에요. 유상증자로 받은 돈은 회사로 들어와요.</span>",
    "no": "내 조각 수와 전체에서 차지하는 비율은 달라요. 10조각 중 1개였던 내 몫이 20조각 중 1개가 되었으니, 비율은 줄었어요.<br><br><span class=\"small\">지분율이 줄었다고 보유 주식의 가치도 반드시 절반이 되는 것은 아니에요. 유상증자로 받은 돈은 회사로 들어와요.</span>"
  },
  {
    "short": "내 주식도 줄어들었을까요?",
    "title": "빈칸을 채워 상헌이에게 생긴 변화를 정리해보세요.",
    "context": [
      "회사의 전체 주식은 <strong>100주</strong>, 상헌이는 그중 <strong>10주</strong>를 가지고 있었어요.",
      "회사가 유상증자로 새 주식 <strong>100주</strong>를 다른 투자자들에게 발행했어요. 상헌이는 참여하지 않고 기존 주식을 그대로 보유했어요."
    ],
    "cloze": "capitalOwnership",
    "clozeKey": "capitalOwnership",
    "options": [
      "다시 확인",
      "같아요 · 줄었어요",
      "다시 확인"
    ],
    "correct": 1,
    "yes": "맞아요! 상헌이의 주식은 10주 그대로예요. 하지만 회사 전체 주식이 100주에서 200주로 늘어서, 지분율은 10%에서 5%로 줄었어요. 이것을 <strong>지분율 희석</strong>이라고 해요.",
    "no": "상헌이가 가진 주식이 없어지는 것은 아니에요. 내 주식 수는 그대로지만, 전체 주식이 늘어나면 내가 차지하는 비율은 줄어들어요."
  },
  {
    "short": "세 단어와 뜻 연결하기",
    "title": "단어와 뜻을 연결해보세요.",
    "matching": {
      "key": "capitalTermsThree",
      "left": [
        "유상증자",
        "신주",
        "지분율"
      ],
      "right": [
        "회사 전체 주식 중 내가 가진 주식이 차지하는 비율",
        "회사가 돈을 받고 새 주식을 발행해 자금을 마련하는 것",
        "회사가 새로 발행한 주식"
      ],
      "answer": [
        1,
        2,
        0
      ],
      "leftLabel": "단어",
      "rightLabel": "뜻",
      "hint": "왼쪽 단어를 고른 뒤 오른쪽 뜻을 눌러 연결해요. 다시 선택하면 연결을 바꿀 수 있어요.",
      "empty": "세 단어를 각각 알맞은 뜻과 연결해 주세요.",
      "longDefinitions": true
    },
    "options": [
      "다시 확인",
      "세 단어와 뜻을 모두 연결",
      "다시 확인"
    ],
    "correct": 1,
    "yes": "맞아요! 유상증자는 회사가 돈을 받고 새 주식을 발행해 자금을 마련하는 것이고, 신주는 새로 발행한 주식이에요. 지분율은 회사 전체 주식 중 내가 가진 주식이 차지하는 비율이에요.",
    "no": "새로 발행한 주식은 신주, 돈을 받고 새 주식을 발행하는 것은 유상증자예요. 회사 전체에서 내가 가진 주식이 차지하는 비율은 지분율이에요."
  },
  {
    "short": "지분율 희석과 주가의 연결",
    "title": "지분율 변화는 주가에 어떤 영향을 줄 수 있을까요?",
    "context": [
      "<strong>CJ CGV, 5,700억 원 규모 유상증자 계획 발표</strong>",
      "2023년 6월, CJ CGV는 새 주식을 발행해 자금을 모으겠다고 발표했어요. 이 가운데 <strong>3,800억 원은 빚을 갚는 데 사용할 계획</strong>이었어요.",
      "상헌이는 CJ CGV의 기존 주주예요. 유상증자에 참여하지 않고, 보유 주식도 팔지 않았어요."
    ],
    "note": "최초 발표 기준이에요. 신주 발행 후의 지분율 변화와, 그 변화에 대한 우려를 연결해보세요.",
    "source": {
      "url": "https://kind.krx.co.kr/external/2023/06/20/000278/20230620000812/11306.htm",
      "label": "CJ CGV 유상증자 결정 · 2023.06.20"
    },
    "options": [
      "다시 확인",
      "줄었다 · 줄어들 · 악재",
      "다시 확인"
    ],
    "correct": 1,
    "yes": "맞아요! 회사가 돈을 모으는 것이 기존 주주에게도 무조건 좋은 것은 아니에요. 새 주식이 얼마나 늘어나고, 모은 돈을 어디에 쓰는지 살펴봐야 해요.",
    "no": "회사에는 필요한 돈이 생기지만, 기존 주주에게는 부담이 될 수도 있어요. 실제로 이 발표 다음 날 주가는 떨어졌어요. 자금의 용도와 새 주식의 발행 조건을 함께 봐야 해요.",
    "dualQuestions": [
      {
        "title": "유상증자로 새 주식이 발행된 후, 상헌이의 지분율은 어떻게 됐을까요?",
        "answer": 1,
        "explanation": "상헌이의 주식 수는 그대로인데 회사 전체 주식 수가 늘어나, 전체에서 차지하는 비율은 줄었어요."
      },
      {
        "title": "회사에서 내가 차지하는 몫이 ______ 수 있어요.",
        "choices": [
          "줄어들",
          "늘어날"
        ],
        "answer": 0,
        "explanation": "보유 주식 수가 그대로인 상태에서 전체 주식이 늘어나면, 회사에서 내가 차지하는 몫인 지분율은 줄어들 수 있어요."
      },
      {
        "title": "이런 지분율 희석 우려는 주가에 ______로 작용할 가능성이 있어요.",
        "choices": [
          "호재",
          "악재"
        ],
        "answer": 1,
        "explanation": "앞으로 신주가 발행되면 기존 주주의 지분율이 낮아질 수 있다는 우려는 주가에 악재로 작용할 가능성이 있어요. CJ CGV의 발표 다음 날 주가는 21.10% 하락했고, 당시 보도는 지분 희석 우려 등을 하락 배경으로 설명했어요. 실제 신주가 발행되기 전에도 예상되는 변화가 주가에 먼저 반영될 수 있어요. 다만 지분율 하락이 보유 주식 가치의 하락을 반드시 뜻하는 것은 아니에요."
      }
    ]
  },
  {
    "short": "유상증자, 투자자는 어떻게 바라봐야 할까요?",
    "title": "빈칸을 채워 오늘 배운 내용을 완성해보세요.",
    "cloze": "capitalIncrease",
    "clozeKey": "capitalPrincipleSummary",
    "generalClozeFeedback": true,
    "options": [
      "다시 확인",
      "유상증자 · 신주 · 지분율 · 악재",
      "다시 확인"
    ],
    "correct": 1,
    "yes": "맞아요! 내 주식 수가 그대로여도 전체 주식이 늘면 지분율은 낮아질 수 있어요. 이런 우려는 주가에 부담이 될 수 있지만, 유상증자가 항상 주가 하락으로 이어지는 것은 아니에요.",
    "no": "돈을 받고 새 주식을 발행하는 것은 유상증자, 새로 발행한 주식은 신주예요. 회사 전체에서 내가 가진 주식이 차지하는 비율은 지분율이에요. 이 비율이 낮아질 수 있다는 우려는 주가에 악재로 작용할 가능성이 있어요."
  }
];
function capitalPriceComparison(){return '<div class="capital-prices" aria-label="증자 발표 전후 종가 비교"><div><span>4월 6일 종가 · 장 마감 후 발표</span><strong>423,800원</strong></div><div><span>4월 7일 종가 · 발표 다음 날</span><strong>430,100원</strong><span>전일 대비 +1.49%</span></div></div>';}
function capitalTableSentence(values,locked,c){
 const rows=[['주식 수','10주'],['한 주의 가격','40,000원'],['전체 주식 가치','400,000원']],active=values.findIndex(v=>!Number.isInteger(v));
 return `<table class="capital-cloze-table"><caption>무상증자 전후 비교</caption><thead><tr><th scope="col">구분</th><th scope="col">무상증자 전</th><th scope="col">무상증자 후</th></tr></thead><tbody>${rows.map(([label,before],i)=>`<tr><th scope="row">${label}</th><td>${before}</td><td><button class="cloze-slot ${Number.isInteger(values[i])?'filled':''} ${!locked&&active===i?'active':''}" data-act="cloze-clear" data-id="${i}" aria-label="${label}, ${i+1}번째 빈칸${Number.isInteger(values[i])?': '+c.words[values[i]]+' 지우기':''}" ${!locked&&active===i?'aria-current="step"':''} ${locked?'disabled':''}>${Number.isInteger(values[i])?c.words[values[i]]:`<span class="blank-number">${i+1}</span>`}</button></td></tr>`).join('')}</tbody></table>`;
}

function capitalMarketReveal(q){return q.revealMarket?`<aside class="quiz-news" aria-label="발표 후 실제 주가"><h3>발표 다음 날, CJ CGV 주가는?</h3><p>2023년 6월 21일 종가 <strong>11,440원</strong><br>전날보다 <strong>21.10% 하락</strong></p><p>당시 보도에서는 대규모 신주 발행으로 기존 주주의 몫이 줄어들 수 있다는 우려와, 새 주식이 시장에 매물로 나올 가능성을 짚었어요.</p><a class="quiz-source" href="https://www.hankyung.com/article/2023062150981" target="_blank" rel="noopener noreferrer">출처 · 한국경제 · 2023.06.21 ↗</a></aside>`:'';}
function capitalDualBoard(q,values,locked=false){return q.dualQuestions.map((part,i)=>{const choices=part.choices||['늘었다','줄었다','변화없다'],word=Number.isInteger(values[i])?choices[values[i]]:`<span class="blank-number">${i+1}</span>`,title=part.title.replace('______',`<span class="capital-inline-blank ${Number.isInteger(values[i])?'filled':''}">${word}</span>`);return `<fieldset class="capital-dual-part"><legend>Q${i+1}. ${title}</legend><div class="capital-dual-choices" style="grid-template-columns:repeat(${choices.length},minmax(0,1fr))">${choices.map((label,j)=>`<button class="choice ${values[i]===j?'selected':''} ${locked?(j===part.answer?'correct':values[i]===j?'wrong':''):''}" data-act="capital-dual-select" data-id="${i*3+j}" aria-pressed="${values[i]===j}" ${locked?'disabled':''}>${label}</button>`).join('')}</div>${locked?`<div class="feedback ${values[i]===part.answer?'':'wrong'}"><strong>${values[i]===part.answer?'정답이에요!':`정답은 ‘${choices[part.answer]}’예요.`}</strong><p>${part.explanation}</p></div>`:''}</fieldset>`;}).join('');}
function capitalDualSource(q){if(!q?.priceComparison)return '';return '<a class="quiz-source" href="https://www.hankyung.com/article/2023062150981" target="_blank" rel="noopener noreferrer">주가와 당시 해석 출처 · 한국경제 · 2023.06.21 ↗</a>';}
function capitalDualQuiz(){const d=currentProgress(),q=currentQuestions()[d.q],answered=Number.isInteger(d.answers[d.q]),values=answered?d.dualSubmitted:d.dualDraft||Array(q.dualQuestions.length).fill(null);return `<section class="study fade day-one">${quizProgress(state.activeLessonDay,d.q,currentQuestions().length,d.q+(answered?1:0))}<div class="card"><p class="small">${lessonTitles[state.activeLessonDay-1]}</p>${questionContext(q)}<h1 class="ox-question">${q.title}</h1><p class="question-note">${q.note}</p>${capitalDualBoard(q,values||q.dualQuestions.map(p=>p.answer),answered)}${answered?capitalDualSource(q):''}</div><div class="study-footer"><span></span>${answered?btn('다음 문제 →','day-one-next'):btn('정답 확인','capital-dual-check','',values.every(Number.isInteger)?'':'disabled')}</div></section>`;}
function capitalDualReview(q){return capitalDualBoard(q,q.dualQuestions.map(p=>p.answer),true)+capitalDualSource(q);}
function handleCapitalDual(action,id){if(!['capital-dual-select','capital-dual-check'].includes(action))return false;const d=currentProgress(),q=currentQuestions()[d.q];if(state.view!=='dayOneQuiz'||!q.dualQuestions||Number.isInteger(d.answers[d.q]))return true;const values=d.dualDraft??=Array(q.dualQuestions.length).fill(null);if(action==='capital-dual-select'){const n=Number(id),part=Math.floor(n/3),choice=n%3;if(!Number.isInteger(n)||n<0||part>=q.dualQuestions.length||choice>=(q.dualQuestions[part].choices?.length||3))return true;values[part]=choice;}else{if(values.length!==q.dualQuestions.length||!q.dualQuestions.every((p,i)=>Number.isInteger(values[i])&&values[i]>=0&&values[i]<(p.choices?.length||3)))return true;d.dualSubmitted=[...values];d.answers[d.q]=values.every((v,i)=>v===q.dualQuestions[i].answer)?q.correct:0;}save();render();return true;}

function capitalDilutionTable(){return '<table class="capital-cloze-table"><caption>유상증자 전후 비교</caption><thead><tr><th scope="col">구분</th><th scope="col">유상증자 전</th><th scope="col">유상증자 후</th></tr></thead><tbody><tr><th scope="row">회사 전체 주식</th><td>100주</td><td>200주</td></tr><tr><th scope="row">상헌이의 주식</th><td>10주</td><td>10주</td></tr><tr><th scope="row">상헌이의 지분율</th><td>10%</td><td><strong aria-label="맞혀 보세요">?</strong></td></tr></tbody></table>';}


function capitalMultiAnswers(q){return q.multiAnswer||q.options.map((_,i)=>i);}
function capitalMultiFeedback(q,selected){if(!q.multiAnswer)return q.no;return [capitalMultiAnswers(q).some(i=>!selected.includes(i))?q.no:'',...selected.filter(i=>q.multiWrong?.[i]).map(i=>q.multiWrong[i])].filter(Boolean).join('<br><br>');}
function capitalMultiBoard(q,selected,locked=false){const answers=capitalMultiAnswers(q);return '<div class="news-choices">'+q.options.map((label,i)=>'<button class="choice capital-multi '+(selected.includes(i)?'selected ':'')+(locked?(answers.includes(i)?'correct':selected.includes(i)?'wrong':''):'')+'" data-act="capital-multi-toggle" data-id="'+i+'" aria-pressed="'+selected.includes(i)+'" '+(locked?'disabled':'')+'><span class="letter">'+String.fromCharCode(65+i)+'</span><span>'+label+'</span>'+(locked&&answers.includes(i)?'<strong class="small">정답</strong>':'')+'</button>').join('')+'</div>';}
function capitalMultiQuiz(){const d=currentProgress(),q=currentQuestions()[d.q],answered=Number.isInteger(d.answers[d.q]),selected=(answered?d.multiSubmitted:d.multiDraft)||[],correct=d.answers[d.q]===q.correct;return '<section class="study fade day-one">'+quizProgress(state.activeLessonDay,d.q,currentQuestions().length,d.q+(answered?1:0))+'<div class="card"><p class="small">'+lessonTitles[state.activeLessonDay-1]+'</p>'+questionContext(q)+'<h1 class="ox-question">'+q.title+'</h1><p class="cloze-hint">여러 개를 선택할 수 있어요. 다시 누르면 선택이 취소돼요.</p>'+capitalMultiBoard(q,selected,answered)+(answered?'<div class="feedback '+(correct?'':'wrong')+'" role="status"><strong>'+(correct?'정답이에요!':q.multiAnswer?'정답은 '+capitalMultiAnswers(q).map(i=>String.fromCharCode(65+i)).join('·')+'예요.':'다섯 가지 모두 정답이에요.')+'</strong><p>'+(correct?q.yes:capitalMultiFeedback(q,selected))+'</p></div>':'')+'</div><div class="study-footer"><span class="small" role="status">'+selected.length+'개 선택</span>'+(answered?btn('다음 문제 →','day-one-next'):btn('정답 확인','capital-multi-check','',selected.length?'':'disabled'))+'</div></section>';}
function capitalMultiReview(q){return capitalMultiBoard(q,capitalMultiAnswers(q),true)+'<section class="review-feedback"><h3>정답 피드백</h3><p>'+q.yes+'</p></section><section class="review-feedback"><h3>정답을 일부 빠뜨렸을 때</h3><p>'+q.no+'</p></section>'+Object.entries(q.multiWrong||{}).map(([i,f])=>'<section class="review-feedback"><h3>오답 피드백 · '+String.fromCharCode(65+Number(i))+' 선택</h3><p>'+f+'</p></section>').join('');}
function handleCapitalMulti(action,id){if(!['capital-multi-toggle','capital-multi-check'].includes(action))return false;const d=currentProgress(),q=currentQuestions()[d.q];if(state.view!=='dayOneQuiz'||!q.multiSelect||Number.isInteger(d.answers[d.q]))return true;const selected=d.multiDraft??=[];if(action==='capital-multi-toggle'){const n=Number(id);if(!Number.isInteger(n)||n<0||n>=q.options.length)return true;const i=selected.indexOf(n);if(i<0)selected.push(n);else selected.splice(i,1);}else{if(!selected.length)return true;d.multiSubmitted=[...selected];const answers=capitalMultiAnswers(q);d.answers[d.q]=selected.length===answers.length&&answers.every(i=>selected.includes(i))?q.correct:0;}save();render();return true;}

function capitalPizza(owned){const slices=Array.from({length:10},(_,i)=>{const angle=j=>(j*36-90)*Math.PI/180,point=j=>`${(60+51*Math.cos(angle(j))).toFixed(3)} ${(60+51*Math.sin(angle(j))).toFixed(3)}`;return `<path d="M60 60 L${point(i)} A51 51 0 0 1 ${point(i+1)} Z" fill="${owned&&i===0?'#347b50':'#f5d78b'}" stroke="#fffdf6" stroke-width="1.8"/>`;}).join('');return `<svg class="capital-pizza" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="57" fill="#dba656"/>${slices}</svg>`;}
function capitalPizzaComparison(){return `<figure class="pizza-comparison" aria-label="처음에는 10조각 중 상헌의 1조각. 추가된 후에는 같은 크기 피자 두 판, 총 20조각 중 상헌의 1조각."><div class="pizza-panels"><section><h3>처음</h3><div class="pizza-plates">${capitalPizza(true)}</div><p>전체 <strong>10조각</strong><br>내 조각 <strong>1개</strong></p></section><section><h3>피자가 추가된 후</h3><div class="pizza-plates">${capitalPizza(true)}${capitalPizza(false)}</div><p>전체 <strong>20조각</strong><br>내 조각 <strong>1개</strong></p></section></div><figcaption><span class="pizza-key"></span> 초록색은 상헌이의 조각이에요.</figcaption></figure>`;}

const capitalOwnershipCloze={"parts": ["상헌이가 가진 <strong>주식 수</strong>는 기존과 ", ".<br><br>회사 전체에서 상헌이의 <strong>지분율</strong>은 ", "."], "words": ["같아요", "줄었어요", "늘었어요"], "answer": [0, 1], "feedback": ["상헌이가 가진 주식이 없어지는 것은 아니에요. 기존 주식을 그대로 보유했으므로 10주로 같아요.", "내 주식 수는 그대로지만, 전체 주식이 늘어나면 내가 차지하는 비율은 줄어들어요."]};

const capitalNextQuestions=[
  {
    "short": "유상증자는 왜 할까요?",
    "title": "유상증자를 하는 이유가 되는 것을 모두 골라보세요.",
    "context": [
      "유상증자는 회사가 투자자에게 돈을 받고 새 주식을 발행해 자금을 마련하는 방법이에요."
    ],
    "multiSelect": true,
    "options": [
      "공장을 새로 짓거나 생산설비를 늘리려고요.",
      "직원 급여나 원재료비 등 운영에 필요한 돈을 마련하려고요.",
      "갚아야 할 빚을 갚으려고요.",
      "다른 회사를 인수하거나 지분에 투자하려고요.",
      "신제품이나 새로운 기술을 개발하려고요."
    ],
    "correct": 1,
    "yes": "맞아요! 다섯 가지 모두 유상증자를 하는 이유가 될 수 있어요. 회사가 성장하려고 돈을 모으기도 하고, 운영을 이어가거나 빚을 갚으려고 모으기도 해요.",
    "no": "선택하지 않은 항목도 유상증자의 목적이 될 수 있어요. 유상증자는 공장 투자뿐 아니라 운영비, 빚 상환, 기업 인수, 연구개발에 필요한 돈을 마련할 때도 활용해요."
  },
  {
    "short": "새 주식을 누구에게 배정할까요?",
    "title": "각 상황에 알맞은 유상증자 방식을 연결해보세요.",
    "context": [
      "세 회사가 새 주식을 발행하면서 투자자를 모집하고 있어요."
    ],
    "matching": {
      "key": "capitalMethods",
      "left": [
        "기존 주주들에게 먼저 새 주식을 살 기회를 줄게요.",
        "불특정 다수의 투자자에게 청약을 받을게요.",
        "사업에 협력할 특정 기업에 새 주식을 배정할게요."
      ],
      "right": [
        "제3자배정",
        "주주배정",
        "일반공모"
      ],
      "answer": [
        1,
        2,
        0
      ],
      "leftLabel": "투자자를 모집하는 상황",
      "rightLabel": "유상증자 방식",
      "hint": "왼쪽 상황을 고른 뒤 오른쪽 유상증자 방식을 눌러 연결해요.",
      "empty": "세 상황을 각각 알맞은 방식과 연결해 주세요.",
      "longDefinitions": true,
      "scenarioChoices": true
    },
    "options": [
      "다시 확인",
      "주주배정 · 일반공모 · 제3자배정",
      "다시 확인"
    ],
    "correct": 1,
    "yes": "맞아요! 기존 주주에게 배정하면 주주배정, 불특정 다수에게 청약을 받으면 일반공모, 특정 투자자에게 배정하면 제3자배정이에요. 유상증자라고 모두 기존 주주에게 돈을 내라고 하는 것은 아니에요.<br><br>제3자배정의 대상이 반드시 협력 기업인 것은 아니에요. 특정 기업이나 개인 등에게 새 주식을 배정하는 방식이에요.",
    "no": "누가 새 주식을 살 기회를 받는지 살펴보세요. 기존 주주는 주주배정, 불특정 다수는 일반공모, 특정 투자자는 제3자배정이에요. 사업 협력은 제3자배정의 한 사례일 뿐, 반드시 필요한 조건은 아니에요."
  },
  {
    "short": "누가 투자하는지도 중요할까요?",
    "title": "이 소식을 본 투자자가 기대할 수 있는 것은 무엇일까요?",
    "context": [
      "A회사가 새 공장을 짓기 위해 유상증자를 발표했어요."
    ],
    "investorReveal": true,
    "revealInfo": [
      "A회사의 제품을 구매하는 <strong>B기업이 제3자배정 유상증자에 참여</strong>해요.",
      "두 회사는 앞으로 제품을 꾸준히 공급하고 구매하는 <strong>장기 공급계약도 맺었어요.</strong>"
    ],
    "options": [
      "새 공장에서 만든 제품을 판매하는 데 도움이 될 수 있어요.",
      "다른 기업이 투자했으므로 주가는 반드시 올라요.",
      "제3자배정이므로 기존 주주의 지분율은 줄지 않아요."
    ],
    "correct": 0,
    "yes": "맞아요! 회사에 돈이 들어오는 데 더해, 제품을 팔 거래처도 확보했어요. 투자자는 이런 사업 협력이 회사의 성장에 도움이 될 것으로 기대할 수 있어요.<br><br><strong>지분율이 낮아지는 부담과 회사가 성장할 것이라는 기대가 함께 생길 수 있어요.</strong>",
    "feedback": [
      null,
      "다른 기업의 참여가 성장 기대를 높일 수는 있지만, 주가 상승을 보장하지는 않아요. 계약이 실제 매출과 이익으로 이어지는지도 살펴봐야 해요.<br><br><strong>지분율이 낮아지는 부담과 회사가 성장할 것이라는 기대가 함께 생길 수 있어요.</strong>",
      "제3자배정도 새 주식을 발행하는 방식이에요. 내 주식 수가 그대로라면 전체 주식이 늘면서 내 지분율은 낮아져요.<br><br><strong>지분율이 낮아지는 부담과 회사가 성장할 것이라는 기대가 함께 생길 수 있어요.</strong>"
    ]
  },
  {
    "short": "유상증자 소식에 주가가 올랐다고요?",
    "title": "뉴스와 주가 변화를 보고 세 질문에 답해보세요.",
    "context": [
      "<strong>레인보우로보틱스, 삼성전자에 새 주식을 발행해 약 590억원 조달</strong>",
      "2023년 1월 3일, 레인보우로보틱스는 삼성전자를 대상으로 <strong>제3자배정 유상증자</strong>를 한다고 공시했어요.",
      "조달한 돈은 <strong>시설과 운영에 사용할 계획</strong>이었어요."
    ],
    "source": {
      "url": "https://kind.krx.co.kr/external/2023/01/03/000002/20230103000004/11306.htm",
      "label": "한국거래소 · 레인보우로보틱스 유상증자 결정 · 2023.01.03 공시"
    },
    "rainbowPrices": true,
    "options": [
      "제3자배정 유상증자를 하면 주가는 반드시 올라요.",
      "유상증자로 지분율이 낮아질 수 있어도, 성장에 대한 기대가 커지면 주가는 오를 수 있어요.",
      "주가가 올랐으므로 기존 주주의 지분율도 높아졌어요."
    ],
    "correct": 1,
    "yes": "맞아요! 삼성전자의 투자로 로봇 사업 협력과 성장에 대한 기대가 주목받았어요. 새 주식 발행에 따른 부담이 있어도 시장이 앞으로의 가능성을 긍정적으로 평가하면 주가는 오를 수 있어요.<br><a class=\"quiz-source\" href=\"https://www.mt.co.kr/tech/2023/03/25/2023032509330323123\" target=\"_blank\" rel=\"noopener noreferrer\">협력 기대 관련 보도 · 머니투데이 · 2023.03.25 ↗</a><br><br><strong>CJ CGV와 레인보우로보틱스는 모두 유상증자를 발표했지만, 주가 반응은 달랐어요. ‘유상증자’라는 이름만으로 호재와 악재를 판단할 수는 없어요.</strong>",
    "feedback": [
      "이 사례에서 주가가 올랐다고 제3자배정이 항상 호재인 것은 아니에요. 누가 참여하는지, 돈을 어디에 쓰는지, 어떤 조건으로 발행하는지 함께 살펴봐야 해요.<br><br><strong>CJ CGV와 레인보우로보틱스는 모두 유상증자를 발표했지만, 주가 반응은 달랐어요. ‘유상증자’라는 이름만으로 호재와 악재를 판단할 수는 없어요.</strong>",
      null,
      "주가와 지분율은 달라요. 주가가 올라도, 내 주식 수가 그대로인 상태에서 다른 투자자에게 신주가 발행되면 내 지분율은 낮아져요.<br><br><strong>CJ CGV와 레인보우로보틱스는 모두 유상증자를 발표했지만, 주가 반응은 달랐어요. ‘유상증자’라는 이름만으로 호재와 악재를 판단할 수는 없어요.</strong>"
    ],
    "note": "세 질문에 모두 답한 뒤 정답을 확인해보세요.",
    "dualQuestions": [
      {
        "title": "레인보우로보틱스는 누구에게 새 주식을 발행했나요?",
        "choices": [
          "기존 주주 전체",
          "삼성전자"
        ],
        "answer": 1,
        "explanation": "레인보우로보틱스는 삼성전자를 대상으로 새 주식을 발행하는 제3자배정 유상증자를 발표했어요."
      },
      {
        "title": "당시 투자자들이 기대한 것은 무엇일까요?",
        "choices": [
          "삼성전자와의 협력을 통한 성장",
          "기존 주주의 지분율 상승"
        ],
        "answer": 0,
        "explanation": "당시 보도에서는 삼성전자와의 로봇 사업 협력과 성장에 대한 기대가 주목받았어요. 주가가 올랐다고 기존 주주의 지분율도 높아지는 것은 아니에요."
      },
      {
        "title": "이 사례를 통해 알 수 있는 것은 무엇일까요?",
        "choices": [
          "유상증자를 하면 주가는 반드시 내려가요.",
          "유상증자를 해도 성장 기대에 따라 주가가 오를 수 있어요."
        ],
        "answer": 1,
        "explanation": "맞아요! 삼성전자의 투자로 로봇 사업 협력과 성장에 대한 기대가 주목받았어요. 새 주식 발행에 따른 부담이 있어도 시장이 앞으로의 가능성을 긍정적으로 평가하면 주가는 오를 수 있어요.<br><a class=\"quiz-source\" href=\"https://www.mt.co.kr/tech/2023/03/25/2023032509330323123\" target=\"_blank\" rel=\"noopener noreferrer\">협력 기대 관련 보도 · 머니투데이 · 2023.03.25 ↗</a><br><br><strong>CJ CGV와 레인보우로보틱스는 모두 유상증자를 발표했지만, 주가 반응은 달랐어요. ‘유상증자’라는 이름만으로 호재와 악재를 판단할 수는 없어요.</strong>"
      }
    ]
  },
  {
    "short": "유상증자, 무엇을 살펴봐야 할까요?",
    "title": "빈칸을 채워 오늘 배운 내용을 완성해보세요.",
    "cloze": "capitalPurposeSummary",
    "clozeKey": "capitalPurposeSummary",
    "generalClozeFeedback": true,
    "options": [
      "다시 확인",
      "자금 사용 목적 · 주주배정 · 일반공모 · 제3자배정 · 달라질 수 있어요",
      "다시 확인"
    ],
    "correct": 1,
    "yes": "맞아요! 유상증자라는 이름만으로 호재와 악재를 판단할 수는 없어요. 돈을 왜 모으는지, 누구에게 어떤 방식으로 주식을 배정하는지 함께 살펴봐야 해요. 회사의 상황과 성장에 대한 기대에 따라 주가 반응도 달라질 수 있어요.",
    "no": "기존 주주에게 배정하면 주주배정, 불특정 다수에게 청약을 받으면 일반공모, 특정 투자자에게 배정하면 제3자배정이에요. 어떤 방식이든 주가가 반드시 오르거나 내리는 것은 아니에요."
  }
];

function pendingCapitalQuiz(){const d=currentProgress();return `<section class="study fade day-one">${quizProgress(state.activeLessonDay,d.q,currentQuestions().length,d.q)}<div class="card"><p class="small">${lessonTitles[state.activeLessonDay-1]}</p><h1>${currentQuestions()[d.q].title}</h1><p>완성된 다른 문제는 계속 확인할 수 있어요.</p></div><div class="study-footer">${btn('학습 경로로','home','secondary')}${d.q<currentQuestions().length-1?btn('다음 문제 보기 →','pending-next'):''}</div></section>`;}

function capitalInvestorDetails(q){return q.investorReveal?`<aside class="quiz-news capital-investor-news" aria-label="추가 소식"><p class="small">추가 소식</p>${q.revealInfo.map(line=>`<p>${line}</p>`).join('')}</aside>`:'';}
function capitalInvestorIntro(){const d=currentProgress(),q=currentQuestions()[d.q];return `<section class="study fade day-one">${quizProgress(state.activeLessonDay,d.q,currentQuestions().length,d.q)}<div class="card"><p class="small">${lessonTitles[state.activeLessonDay-1]}</p><h1 class="ox-question">${q.short}</h1>${questionContext(q)}${btn('누가 투자하는지 확인하기','capital-investor-open')}</div></section>`;}

function capitalRainbowPrices(){return '<section aria-label="레인보우로보틱스 발표 전후 실제 종가"><div class="capital-prices"><div><span>발표 전 거래일 · 2023년 1월 2일</span><strong>32,600원</strong></div><div><span>발표 당일 · 2023년 1월 3일</span><strong>41,550원</strong><span>전 거래일 대비 +27.45%</span></div></div><p class="small">당시 종가 기준이에요. 하루 만에 27.45% 상승했어요.</p><a class="quiz-source" href="https://www.fntimes.com/html/view.php?ud=202301031559556333179ad43907_18" target="_blank" rel="noopener noreferrer">종가·상승률 출처 · 한국금융신문 · 2023.01.03 ↗</a><a class="quiz-source" href="https://www.mt.co.kr/tech/2023/03/25/2023032509330323123" target="_blank" rel="noopener noreferrer">발표 전후 가격 확인 · 머니투데이 · 2023.03.25 ↗</a></section>';}

const capitalPurposeSummaryCloze={"parts": ["유상증자 소식을 보면, 먼저 회사가 모은 돈을 어디에 쓰려는지 ", "을 확인해요.<br><br>기존 주주에게 새 주식을 배정하는 방식은 ", ", 불특정 다수의 투자자에게 청약을 받는 방식은 ", "예요.<br><br>삼성전자가 참여한 레인보우로보틱스 사례처럼 특정 투자자에게 새 주식을 배정하는 방식은 ", "이에요.<br><br>유상증자의 목적과 방법, 참여 투자자에 대한 기대에 따라 주가 흐름은 ", "."], "words": ["자금 사용 목적", "주주배정", "일반공모", "제3자배정", "달라질 수 있어요", "항상 상승해요", "항상 하락해요"], "answer": [0, 1, 2, 3, 4], "feedback": ["모은 돈을 어디에 쓰려는지 자금 사용 목적을 확인해요.", "기존 주주에게 배정하는 방식은 주주배정이에요.", "불특정 다수에게 청약을 받는 방식은 일반공모예요.", "특정 투자자에게 배정하는 방식은 제3자배정이에요.", "목적과 방법, 참여 투자자에 대한 기대에 따라 주가 흐름은 달라질 수 있어요."]};
