const lessonTitles = [
  "내가 아는 회사의 주인이 될 수 있다고?",
  "주주가 되면 어떤 권리가 생길까?",
  "배당은 돈으로만 받을까?",
  "주식을 언제 사야 배당을 받을까?",
  "총복습 · 내가 가진 주식의 의미 돌아보기",
  "주가 차트는 무엇을 보여줄까?",
  "내가 넣은 돈과 지금 가진 주식의 가치는 같을까?",
  "안 팔았으면 손해가 아닐까?",
  "더 많이 벌면 더 잘한 투자일까?",
  "20% 떨어진 돈, 20% 오르면 돌아올까?",
  "총복습 · 내 투자 성적표 읽기",
  "캔들 하나는 어떻게 읽을까?",
  "주식은 안전자산일까?",
  "예금과 주식은 뭐가 다를까?",
  "내가 주식을 사면, 그 돈은 회사로 갈까?",
  "주가는 누가 정할까?",
  "총복습 · 내가 산 주식 다시 보기",
  "캔들은 어떤 모양이 있을까?",
  "주가가 싼 것이 더 가치가 없는 걸까?",
  "같은 100억 원짜리 회사, 어디가 더 쌀까?",
  "PER 10배는 무슨 뜻일까?",
  "PER이 낮으면 무조건 좋을까?",
  "총복습 · 내가 산 가격 돌아보기",
  "캔들 모양에는 어떤 움직임이 담겼을까?",
  "회사는 무엇을 팔아 돈을 벌까?",
  "큰 회사는 모두 흑자일까?",
  "매출이 늘면 이익도 늘어난 걸까?",
  "매출에서 비용을 빼면 무엇이 남을까?",
  "총복습 · 작은 카페의 이익 계산하기",
  "총복습 · 내가 산 날의 캔들 읽기",
  "회사가 돈을 잘 벌면 주가도 오를까?",
  "실적 발표 전에 주가는 왜 올랐을까?",
  "최대 실적인데 주가는 왜 떨어질까?",
  "따로 움직이는 실적과 주가, 관계가 없을까?",
  "총복습 · 실적을 믿고 산 내 주식 돌아보기",
  "주가가 자꾸 멈추는 가격대가 있을까?",
  "금리가 오르면 이자는 얼마나 달라질까?",
  "은행 이자가 내 주식과 무슨 상관일까?",
  "환율이 오르면 내 여행비는 왜 늘어날까?",
  "환율이 오르면 수출기업은 무조건 좋을까?",
  "총복습 · 금리와 환율로 내 투자 돌아보기",
  "주가가 그 가격대를 넘어가면 뭐라고 할까?",
  "국제유가가 오르면 무엇이 달라질까?",
  "기름값이 오르면 모든 회사가 손해일까?",
  "불안할 때 사람들은 왜 금을 찾을까?",
  "금을 사도 이자나 배당을 받을까?",
  "총복습 · 유가와 금값 뉴스 읽기",
  "주가를 막던 가격이 이제는 받쳐준다고?",
  "물가가 얼마나 올랐는지 어떻게 알까?",
  "일하는 사람이 늘면 경제도 좋아진 걸까?",
  "경제가 성장했다는 건 무슨 뜻일까?",
  "수출이 늘면 내가 산 회사에도 좋을까?",
  "총복습 · 네 가지 지표로 경제 읽기",
  "주가가 비슷한 범위에서 오르내린다면?",
  "실적발표에서는 무엇을 확인할까?",
  "회사가 앞으로 잘 벌 거라는 말은 확정일까?",
  "큰 계약을 따내면 바로 이익이 생길까?",
  "신기술이나 허가 소식은 언제 돈이 될까?",
  "총복습 · 회사 소식과 실적 연결하기",
  "총복습 · 배운 이름으로 차트 읽기",
  "유상증자는 악재일까?",
  "유상증자, 주가가 오를 수도 있을까?",
  "무상증자, 주식을 더 받으면 이득일까?",
  "회사가 자기 주식을 사서 없애면 뭐가 달라질까?",
  "총복습 · 회사의 결정과 내 주식 연결하기",
  "차트 아래의 막대는 무엇일까?",
  "수급이 좋다는 건 무슨 뜻일까?",
  "외국인과 기관이 사면 따라 사도 될까?",
  "주식을 빌려서 먼저 팔 수도 있을까?",
  "빚내서 산 주식이 많으면 무엇이 달라질까?",
  "총복습 · 내 주식의 수급 읽기",
  "같이 올랐는데 거래량은 왜 다를까?",
  "내 돈 중 얼마를 투자해도 될까?",
  "포트폴리오는 무엇을 모아놓은 걸까?",
  "주식 다섯 개면 충분히 나눈 걸까?",
  "나눠둔 비중이 달라지면 어떻게 할까?",
  "총복습 · 내 첫 포트폴리오 만들기",
  "이동평균선은 무엇을 평균 낸 걸까?",
  "사기 전에 무엇을 적어둘까?",
  "한 번에 살까, 나눠서 살까?",
  "가격이 떨어지면 더 사도 될까?",
  "언제 팔지 미리 정할 수 있을까?",
  "총복습 · 매수부터 매도까지 계획하기",
  "하루 올랐다고 상승 추세일까?",
  "처음 여행비를 넣을 때 무엇을 놓쳤을까?",
  "다시 급등 소식을 들으면 어떻게 할까?",
  "내 주식이 크게 떨어지면 어떻게 할까?",
  "내 투자 계획을 한 장으로 정리한다면?",
  "총복습 · 가격과 거래량 함께 읽기",
  "총복습 · 나의 기준으로 여행 출발"
];
const lessonDetails = [
  {
    "learn": "친구의 치킨집에 함께 돈을 내고 지분을 받는 사례로 주식의 의미를 배워요."
  },
  {
    "learn": "주주의 의결권과 배당받을 권리, 권리를 행사할 조건을 알아봐요."
  },
  {
    "learn": "현금배당과 주식배당을 구분하고, 받을 배당금을 계산해요."
  },
  {
    "learn": "달력을 보며 배당기준일과 결제일에 맞는 매수 날짜를 찾아봐요."
  },
  {
    "learn": "주주의 권리와 배당의 종류, 배당받을 조건을 복습해요."
  },
  {
    "learn": "차트의 시간·가격 축과 캔들 하나가 나타내는 기간을 알아봐요."
  },
  {
    "learn": "주식을 살 때 쓴 돈과 지금 보유한 주식의 가치를 구분해요."
  },
  {
    "learn": "보유 중인 평가손익과 매도 후 확정되는 실현손익을 구분해요."
  },
  {
    "learn": "투자금과 수익금을 비교하며, 번 돈이 많아도 수익률은 낮을 수 있음을 알아봐요."
  },
  {
    "learn": "20% 하락한 뒤 20% 올라도 원금으로 돌아오지 않는 이유를 알아봐요."
  },
  {
    "learn": "매수금액·평가금액·손익·수익률로 내 투자 성적표를 읽어봐요."
  },
  {
    "learn": "시가·고가·저가·종가를 읽고, 양봉과 음봉을 구분해요."
  },
  {
    "learn": "유명한 회사의 주식도 원금이 보장되지 않는다는 점을 배워요."
  },
  {
    "learn": "돈을 맡기는 예금과 회사의 일부를 갖는 주식의 차이를 알아봐요."
  },
  {
    "learn": "시장에서 주식을 사는 거래와 회사가 새 주식을 발행하는 경우를 구분해요."
  },
  {
    "learn": "사려는 가격과 팔려는 가격이 만나 주가가 만들어지는 과정을 알아봐요."
  },
  {
    "learn": "주식의 위험과 예금과의 차이, 거래 상대와 가격이 정해지는 과정을 복습해요."
  },
  {
    "learn": "몸통과 꼬리의 길이를 보며 대표적인 캔들 모양을 구분해요."
  },
  {
    "learn": "주가와 발행주식 수로 시가총액을 구하고, 회사의 크기를 비교해요."
  },
  {
    "learn": "시가총액이 같은 두 회사의 이익을 비교하며 가격을 판단해요."
  },
  {
    "learn": "주가를 주당순이익과 비교하며 PER 10배의 의미를 알아봐요."
  },
  {
    "learn": "성장 기대와 이익 변화를 살펴보며, 낮은 PER만으로 판단하기 어려운 이유를 알아봐요."
  },
  {
    "learn": "주가·시가총액·이익·PER을 비교하며 내가 산 가격을 돌아봐요."
  },
  {
    "learn": "캔들의 몸통과 꼬리에 담긴 가격 움직임을 읽어봐요."
  },
  {
    "learn": "회사의 주요 제품과 서비스를 살펴보며 무엇으로 돈을 버는지 알아봐요."
  },
  {
    "learn": "흑자와 적자를 구분하고, 큰 회사도 적자를 낼 수 있음을 알아봐요."
  },
  {
    "learn": "매출이 늘어도 비용이 더 늘면 이익은 줄어들 수 있음을 알아봐요."
  },
  {
    "learn": "매출에서 재료비·임대료·인건비 등을 빼고 남은 이익을 계산해요."
  },
  {
    "learn": "작은 카페의 매출과 비용으로 이익을 계산하고 흑자·적자를 구분해요."
  },
  {
    "learn": "캔들의 네 가지 가격과 모양을 읽으며 그날의 움직임을 설명해요."
  },
  {
    "learn": "회사의 이익과 주가가 항상 함께 움직이지는 않는 이유를 알아봐요."
  },
  {
    "learn": "앞으로의 실적에 대한 기대가 주가에 미리 반영되는 과정을 배워요."
  },
  {
    "learn": "최대 실적이어도 시장의 기대에 못 미치면 주가가 떨어질 수 있음을 알아봐요."
  },
  {
    "learn": "개와 주인의 산책에 빗대어 단기 주가와 회사의 장기적인 돈벌이를 살펴봐요."
  },
  {
    "learn": "실적에 대한 기대와 실제 결과, 주가 반응을 연결해 복습해요."
  },
  {
    "learn": "반복해서 반등하거나 밀린 가격대를 찾아 지지와 저항을 구분해요."
  },
  {
    "learn": "금리로 이자를 계산하고, 기준금리가 은행 금리에 미치는 영향을 알아봐요."
  },
  {
    "learn": "금리 변화가 회사의 이자 부담과 투자자의 선택에 미치는 영향을 알아봐요."
  },
  {
    "learn": "원·달러 환율이 바뀔 때 같은 여행비에 필요한 원화가 얼마나 달라지는지 계산해요."
  },
  {
    "learn": "달러 매출과 비용을 함께 보며 환율 변화가 기업에 미치는 영향을 알아봐요."
  },
  {
    "learn": "회사의 대출과 달러 매출·비용에 금리·환율 변화를 적용해요."
  },
  {
    "learn": "저항 위로 올라가는 돌파와 지지 아래로 내려가는 이탈을 구분해요."
  },
  {
    "learn": "국제유가 변화가 운송비·생산비·물가에 미치는 영향을 알아봐요."
  },
  {
    "learn": "원유를 파는 회사와 사용하는 회사를 비교하며 유가 변화의 영향을 살펴봐요."
  },
  {
    "learn": "금을 안전자산으로 부르는 이유와 금에도 손실 위험이 있다는 점을 알아봐요."
  },
  {
    "learn": "금은 이자나 배당 없이 주로 가격 변화로 손익이 생긴다는 점을 배워요."
  },
  {
    "learn": "유가와 금값 뉴스를 읽으며 원유와 금의 특징을 복습해요."
  },
  {
    "learn": "돌파·이탈 이후 같은 가격대의 지지와 저항 역할이 바뀌는 모습을 찾아봐요."
  },
  {
    "learn": "소비자물가지수를 읽고, 물가 상승률이 낮아지는 것과 가격 하락을 구분해요."
  },
  {
    "learn": "취업자 수와 실업률을 읽으며 고용과 소득·소비의 관계를 알아봐요."
  },
  {
    "learn": "GDP와 실질 성장률로 경제의 생산 규모가 얼마나 달라졌는지 읽어봐요."
  },
  {
    "learn": "전체 수출과 품목별 수출을 구분하며 내가 산 회사와의 관련성을 살펴봐요."
  },
  {
    "learn": "물가·고용·성장·수출입 지표를 구분하며 경제 뉴스를 읽어봐요."
  },
  {
    "learn": "지지와 저항 사이를 오르내리는 박스권을 찾고 돌파·이탈과 구분해요."
  },
  {
    "learn": "실적발표의 대상 기간과 매출·영업이익·순이익을 확인해요."
  },
  {
    "learn": "회사의 실적 전망인 가이던스를 읽고, 예상과 확정된 결과를 구분해요."
  },
  {
    "learn": "계약금액이 바로 이익이 되지 않는 이유를 공급 기간·조건·비용으로 살펴봐요."
  },
  {
    "learn": "신기술과 인허가 소식이 실제 판매와 이익으로 이어지려면 무엇이 필요한지 알아봐요."
  },
  {
    "learn": "실적·전망·계약·기술 소식을 구분하고 실제 돈벌이로 이어질 조건을 복습해요."
  },
  {
    "learn": "차트에서 지지·저항, 돌파·이탈, 역할 전환과 박스권을 찾아봐요."
  },
  {
    "learn": "유상증자로 지분율이 낮아지는 원리와 주가에 부담이 될 수 있는 이유를 배워요."
  },
  {
    "learn": "유상증자의 목적·방식·참여 투자자에 따라 주가 반응이 달라지는 사례를 살펴봐요."
  },
  {
    "learn": "셀트리온 사례로 무상증자의 목적과 주식 수·가격 변화, 발표 후 주가 반응을 알아봐요."
  },
  {
    "learn": "SK하이닉스 사례로 자사주 매입·소각의 차이와 지분율 변화, 발표 후 주가 반응을 알아봐요."
  },
  {
    "learn": "유상증자·무상증자·자사주 매입과 소각이 내 주식에 미치는 영향을 복습해요."
  },
  {
    "learn": "차트 아래 거래량 막대가 보여주는 주식 수와 거래의 활발함을 알아봐요."
  },
  {
    "learn": "사려는 수요와 팔려는 공급이 주가에 영향을 주는 과정을 알아봐요."
  },
  {
    "learn": "외국인·기관의 순매수를 읽고, 따라 사기 전에 살펴볼 점을 알아봐요."
  },
  {
    "learn": "주식을 빌려 먼저 팔고 나중에 사서 갚는 공매도의 구조를 배워요."
  },
  {
    "learn": "신용융자 잔고와 반대매매가 주식의 매도 물량에 미치는 영향을 알아봐요."
  },
  {
    "learn": "투자자별 매매·공매도·신용융자 자료를 읽으며 수급을 복습해요."
  },
  {
    "learn": "가격과 거래량을 함께 보며, 거래가 활발해도 상승이 보장되지 않는다는 점을 알아봐요."
  },
  {
    "learn": "생활비·비상자금과 돈을 쓸 시점, 손실 감당 여건을 고려해 투자금을 정해요."
  },
  {
    "learn": "주식·채권·현금성 자산을 어떤 비중으로 보유할지 정하는 자산배분을 배워요."
  },
  {
    "learn": "종목이 많아도 위험이 비슷할 수 있음을 알아보고 분산투자의 의미를 배워요."
  },
  {
    "learn": "가격 변화로 달라진 자산 비중을 점검하고 조정하는 리밸런싱을 배워요."
  },
  {
    "learn": "돈을 쓸 시점과 손실 감당 여건에 맞춰 투자금과 자산 비중을 정해봐요."
  },
  {
    "learn": "일정 기간의 종가를 평균 낸 이동평균선의 의미와 특징을 알아봐요."
  },
  {
    "learn": "회사의 사업·실적·가격·위험을 살펴보고 주식을 사려는 이유를 적어봐요."
  },
  {
    "learn": "매수 시점을 나누는 분할매수의 의미와 한계를 알아봐요."
  },
  {
    "learn": "가격이 떨어졌을 때 매수 근거와 투자 비중을 점검하며 추가매수 여부를 판단해요."
  },
  {
    "learn": "매수 근거의 변화와 손실 범위, 자금 사용 계획에 맞춰 매도 기준을 세워요."
  },
  {
    "learn": "매수 이유부터 투입 금액·추가매수·매도 조건까지 투자 계획을 정리해요."
  },
  {
    "learn": "여러 고점과 저점의 흐름을 보며 상승·하락·횡보 추세를 구분해요."
  },
  {
    "learn": "처음 투자했던 상황을 돌아보며 돈의 목적·매수 근거·가격·위험을 점검해요."
  },
  {
    "learn": "급등 소식에 조급해진 상황에서 내가 세운 매수 기준을 적용해요."
  },
  {
    "learn": "주가가 크게 떨어졌을 때 기업과 시장, 투자 비중을 점검해 다음 행동을 정해요."
  },
  {
    "learn": "투자 목적·금액·포트폴리오·매매 기준을 한 장의 계획서로 정리해요."
  },
  {
    "learn": "가격·거래량·이동평균선을 함께 읽으며 차트에서 배운 내용을 복습해요."
  },
  {
    "learn": "마지막 투자 사례에 나의 계획과 판단 기준을 적용하며 90일의 배움을 정리해요."
  }
];
const groupDetails = [
  {
    "intro": "주식의 위험과 예금과의 차이, 주식이 거래되고 가격이 정해지는 과정을 배워요.",
    "promise": "주식의 위험과 예금과의 차이를 이해하고, 거래 상대와 가격이 만들어지는 과정을 설명할 수 있어요.",
    "term": "주식 거래"
  },
  {
    "intro": "매수금액과 평가금액, 손익과 수익률로 투자 결과를 읽어봐요.",
    "promise": "계좌의 숫자에 막연히 놀라는 대신, 내 돈이 얼마나 달라졌는지 직접 읽고 설명할 수 있어요.",
    "term": "매수·매도"
  },
  {
    "intro": "주식의 의미와 주주의 권리, 배당의 종류와 받는 조건을 배워요.",
    "term": "주주",
    "promise": "주주의 권리와 배당의 종류를 이해하고, 배당받기 위한 매수 시점을 판단할 수 있어요."
  },
  {
    "term": "PER",
    "intro": "주가·시가총액·이익·PER을 비교하며 주식의 가격을 판단하는 법을 배워요.",
    "promise": "주가와 시가총액의 관계를 이해하고, 회사의 가격을 이익과 비교하며 PER의 의미와 한계를 설명할 수 있어요."
  },
  {
    "intro": "회사가 돈을 버는 사업을 살펴보고, 매출과 비용으로 이익을 계산해요.",
    "promise": "회사가 무엇을 팔아 돈을 버는지 설명하고, 매출과 비용으로 이익을 계산해 흑자와 적자를 구분할 수 있어요."
  },
  {
    "intro": "실적에 대한 기대와 실제 결과를 비교하며 주가 반응이 달라지는 이유를 배워요.",
    "promise": "실적과 주가가 다르게 움직이는 이유를 이해하고, 이미 반영된 기대와 회사의 장기적인 돈벌이를 함께 살펴볼 수 있어요."
  },
  {
    "intro": "금리와 환율의 뜻을 배우고, 변화가 기업과 투자에 미치는 영향을 알아봐요.",
    "promise": "금리와 환율의 뜻을 이해하고, 변화가 여행비와 회사의 비용·매출, 투자자의 선택에 미치는 영향을 설명할 수 있어요."
  },
  {
    "intro": "원유와 금의 특징을 배우고, 가격 변화가 기업과 투자에 미치는 영향을 알아봐요.",
    "promise": "원유와 금의 특징을 구분하고, 원자재 가격 변화가 여행비와 기업에 미치는 영향을 설명할 수 있어요."
  },
  {
    "intro": "물가·고용·GDP·수출입 지표로 경제 상황을 읽는 법을 배워요.",
    "promise": "물가·고용·성장·수출입 지표가 무엇을 보여주는지 이해하고, 경제 뉴스의 숫자를 읽을 수 있어요."
  },
  {
    "intro": "실적발표·전망·계약·기술 소식이 회사의 매출과 이익에 어떻게 연결되는지 살펴봐요.",
    "promise": "실적발표·전망·계약·기술과 인허가 소식을 구분하고, 실제 돈벌이로 이어지기 위해 확인할 조건을 설명할 수 있어요."
  },
  {
    "intro": "실제 사례로 유상·무상증자와 자사주 매입·소각의 의미, 주가 반응을 배워요.",
    "promise": "유상증자와 자사주 매입·소각, 무상증자 발표가 회사의 자금·주식 수와 기존 주주에게 무엇을 바꾸는지 설명할 수 있어요."
  },
  {
    "intro": "투자자별 매매와 공매도·신용융자 자료로 주식 수급을 읽는 법을 배워요.",
    "promise": "투자자별 매매와 공매도·신용융자 잔고가 무엇을 보여주는지 이해하고, 확인한 수급과 주가 예상을 구분할 수 있어요."
  },
  {
    "intro": "차트의 시간·가격 축과 캔들의 가격·모양을 읽는 법을 배워요.",
    "promise": "차트의 시간과 가격을 읽고, 캔들의 네 가지 가격·모양과 그 의미를 설명할 수 있어요."
  },
  {
    "intro": "선 그림으로 지지·저항, 돌파·이탈, 역할 전환과 박스권을 배워요.",
    "promise": "차트에서 지지·저항, 돌파·이탈, 역할 전환과 박스권을 찾아 설명할 수 있어요."
  },
  {
    "intro": "가격·거래량·이동평균선을 함께 보며 주가의 추세를 읽는 법을 배워요.",
    "promise": "가격·거래량·이동평균선을 함께 읽고, 하루의 움직임과 일정 기간의 추세를 구분할 수 있어요."
  },
  {
    "intro": "내 상황에 맞는 투자금을 정하고, 자산을 나누고 비중을 점검하는 법을 배워요.",
    "promise": "돈을 쓸 시점과 손실 감당 여건에 맞춰 투자금과 포트폴리오를 정하고, 비중을 점검할 기준을 설명할 수 있어요."
  },
  {
    "intro": "매수 이유와 투입 금액, 추가매수·매도 조건을 정해 투자 기준을 세워요.",
    "promise": "매수 근거와 투입 금액, 추가매수·매도 조건을 정해 한 건의 투자 계획을 세울 수 있어요."
  },
  {
    "intro": "투자 상황에 배운 내용을 적용하고, 나만의 투자 계획을 한 장으로 정리해요.",
    "promise": "여러 투자 상황에 자신의 기준을 적용하고, 포트폴리오와 매매·점검 기준을 담은 한 장의 투자 계획서를 완성할 수 있어요."
  }
];

const learningSchedule = [
  {
    "day": 1,
    "section": 0,
    "kind": "general",
    "unit": 1,
    "groupIndex": 2,
    "chapter": 1,
    "label": "유닛 1 · 챕터 1",
    "sourceIndex": 10
  },
  {
    "day": 2,
    "section": 0,
    "kind": "general",
    "unit": 1,
    "groupIndex": 2,
    "chapter": 2,
    "label": "유닛 1 · 챕터 2",
    "sourceIndex": 11
  },
  {
    "day": 3,
    "section": 0,
    "kind": "general",
    "unit": 1,
    "groupIndex": 2,
    "chapter": 3,
    "label": "유닛 1 · 챕터 3",
    "sourceIndex": 12
  },
  {
    "day": 4,
    "section": 0,
    "kind": "general",
    "unit": 1,
    "groupIndex": 2,
    "chapter": 4,
    "label": "유닛 1 · 챕터 4",
    "sourceIndex": 13
  },
  {
    "day": 5,
    "section": 0,
    "kind": "general",
    "unit": 1,
    "groupIndex": 2,
    "chapter": 5,
    "label": "유닛 1 · 챕터 5",
    "sourceIndex": 14
  },
  {
    "day": 6,
    "section": 0,
    "kind": "chart",
    "unit": null,
    "groupIndex": 12,
    "chapter": 1,
    "label": "차트 A-1",
    "sourceIndex": 60
  },
  {
    "day": 7,
    "section": 0,
    "kind": "general",
    "unit": 2,
    "groupIndex": 1,
    "chapter": 1,
    "label": "유닛 2 · 챕터 1",
    "sourceIndex": 5
  },
  {
    "day": 8,
    "section": 0,
    "kind": "general",
    "unit": 2,
    "groupIndex": 1,
    "chapter": 2,
    "label": "유닛 2 · 챕터 2",
    "sourceIndex": 6
  },
  {
    "day": 9,
    "section": 0,
    "kind": "general",
    "unit": 2,
    "groupIndex": 1,
    "chapter": 3,
    "label": "유닛 2 · 챕터 3",
    "sourceIndex": 7
  },
  {
    "day": 10,
    "section": 0,
    "kind": "general",
    "unit": 2,
    "groupIndex": 1,
    "chapter": 4,
    "label": "유닛 2 · 챕터 4",
    "sourceIndex": 8
  },
  {
    "day": 11,
    "section": 0,
    "kind": "general",
    "unit": 2,
    "groupIndex": 1,
    "chapter": 5,
    "label": "유닛 2 · 챕터 5",
    "sourceIndex": 9
  },
  {
    "day": 12,
    "section": 0,
    "kind": "chart",
    "unit": null,
    "groupIndex": 12,
    "chapter": 2,
    "label": "차트 A-2",
    "sourceIndex": 61
  },
  {
    "day": 13,
    "section": 0,
    "kind": "general",
    "unit": 3,
    "groupIndex": 0,
    "chapter": 1,
    "label": "유닛 3 · 챕터 1",
    "sourceIndex": 0
  },
  {
    "day": 14,
    "section": 0,
    "kind": "general",
    "unit": 3,
    "groupIndex": 0,
    "chapter": 2,
    "label": "유닛 3 · 챕터 2",
    "sourceIndex": 2
  },
  {
    "day": 15,
    "section": 0,
    "kind": "general",
    "unit": 3,
    "groupIndex": 0,
    "chapter": 3,
    "label": "유닛 3 · 챕터 3",
    "sourceIndex": 90
  },
  {
    "day": 16,
    "section": 0,
    "kind": "general",
    "unit": 3,
    "groupIndex": 0,
    "chapter": 4,
    "label": "유닛 3 · 챕터 4",
    "sourceIndex": 91
  },
  {
    "day": 17,
    "section": 0,
    "kind": "general",
    "unit": 3,
    "groupIndex": 0,
    "chapter": 5,
    "label": "유닛 3 · 챕터 5",
    "sourceIndex": 92
  },
  {
    "day": 18,
    "section": 0,
    "kind": "chart",
    "unit": null,
    "groupIndex": 12,
    "chapter": 3,
    "label": "차트 A-3",
    "sourceIndex": 62
  },
  {
    "day": 19,
    "section": 1,
    "kind": "general",
    "unit": 4,
    "groupIndex": 3,
    "chapter": 1,
    "label": "유닛 4 · 챕터 1",
    "sourceIndex": 15
  },
  {
    "day": 20,
    "section": 1,
    "kind": "general",
    "unit": 4,
    "groupIndex": 3,
    "chapter": 2,
    "label": "유닛 4 · 챕터 2",
    "sourceIndex": 16
  },
  {
    "day": 21,
    "section": 1,
    "kind": "general",
    "unit": 4,
    "groupIndex": 3,
    "chapter": 3,
    "label": "유닛 4 · 챕터 3",
    "sourceIndex": 17
  },
  {
    "day": 22,
    "section": 1,
    "kind": "general",
    "unit": 4,
    "groupIndex": 3,
    "chapter": 4,
    "label": "유닛 4 · 챕터 4",
    "sourceIndex": 18
  },
  {
    "day": 23,
    "section": 1,
    "kind": "general",
    "unit": 4,
    "groupIndex": 3,
    "chapter": 5,
    "label": "유닛 4 · 챕터 5",
    "sourceIndex": 19
  },
  {
    "day": 24,
    "section": 1,
    "kind": "chart",
    "unit": null,
    "groupIndex": 12,
    "chapter": 4,
    "label": "차트 A-4",
    "sourceIndex": 63
  },
  {
    "day": 25,
    "section": 1,
    "kind": "general",
    "unit": 5,
    "groupIndex": 4,
    "chapter": 1,
    "label": "유닛 5 · 챕터 1",
    "sourceIndex": 20
  },
  {
    "day": 26,
    "section": 1,
    "kind": "general",
    "unit": 5,
    "groupIndex": 4,
    "chapter": 2,
    "label": "유닛 5 · 챕터 2",
    "sourceIndex": 21
  },
  {
    "day": 27,
    "section": 1,
    "kind": "general",
    "unit": 5,
    "groupIndex": 4,
    "chapter": 3,
    "label": "유닛 5 · 챕터 3",
    "sourceIndex": 22
  },
  {
    "day": 28,
    "section": 1,
    "kind": "general",
    "unit": 5,
    "groupIndex": 4,
    "chapter": 4,
    "label": "유닛 5 · 챕터 4",
    "sourceIndex": 23
  },
  {
    "day": 29,
    "section": 1,
    "kind": "general",
    "unit": 5,
    "groupIndex": 4,
    "chapter": 5,
    "label": "유닛 5 · 챕터 5",
    "sourceIndex": 24
  },
  {
    "day": 30,
    "section": 1,
    "kind": "chart",
    "unit": null,
    "groupIndex": 12,
    "chapter": 5,
    "label": "차트 A-5",
    "sourceIndex": 64
  },
  {
    "day": 31,
    "section": 1,
    "kind": "general",
    "unit": 6,
    "groupIndex": 5,
    "chapter": 1,
    "label": "유닛 6 · 챕터 1",
    "sourceIndex": 25
  },
  {
    "day": 32,
    "section": 1,
    "kind": "general",
    "unit": 6,
    "groupIndex": 5,
    "chapter": 2,
    "label": "유닛 6 · 챕터 2",
    "sourceIndex": 26
  },
  {
    "day": 33,
    "section": 1,
    "kind": "general",
    "unit": 6,
    "groupIndex": 5,
    "chapter": 3,
    "label": "유닛 6 · 챕터 3",
    "sourceIndex": 27
  },
  {
    "day": 34,
    "section": 1,
    "kind": "general",
    "unit": 6,
    "groupIndex": 5,
    "chapter": 4,
    "label": "유닛 6 · 챕터 4",
    "sourceIndex": 28
  },
  {
    "day": 35,
    "section": 1,
    "kind": "general",
    "unit": 6,
    "groupIndex": 5,
    "chapter": 5,
    "label": "유닛 6 · 챕터 5",
    "sourceIndex": 29
  },
  {
    "day": 36,
    "section": 1,
    "kind": "chart",
    "unit": null,
    "groupIndex": 13,
    "chapter": 1,
    "label": "차트 B-1",
    "sourceIndex": 65
  },
  {
    "day": 37,
    "section": 2,
    "kind": "general",
    "unit": 7,
    "groupIndex": 6,
    "chapter": 1,
    "label": "유닛 7 · 챕터 1",
    "sourceIndex": 30
  },
  {
    "day": 38,
    "section": 2,
    "kind": "general",
    "unit": 7,
    "groupIndex": 6,
    "chapter": 2,
    "label": "유닛 7 · 챕터 2",
    "sourceIndex": 31
  },
  {
    "day": 39,
    "section": 2,
    "kind": "general",
    "unit": 7,
    "groupIndex": 6,
    "chapter": 3,
    "label": "유닛 7 · 챕터 3",
    "sourceIndex": 32
  },
  {
    "day": 40,
    "section": 2,
    "kind": "general",
    "unit": 7,
    "groupIndex": 6,
    "chapter": 4,
    "label": "유닛 7 · 챕터 4",
    "sourceIndex": 33
  },
  {
    "day": 41,
    "section": 2,
    "kind": "general",
    "unit": 7,
    "groupIndex": 6,
    "chapter": 5,
    "label": "유닛 7 · 챕터 5",
    "sourceIndex": 34
  },
  {
    "day": 42,
    "section": 2,
    "kind": "chart",
    "unit": null,
    "groupIndex": 13,
    "chapter": 2,
    "label": "차트 B-2",
    "sourceIndex": 66
  },
  {
    "day": 43,
    "section": 2,
    "kind": "general",
    "unit": 8,
    "groupIndex": 7,
    "chapter": 1,
    "label": "유닛 8 · 챕터 1",
    "sourceIndex": 35
  },
  {
    "day": 44,
    "section": 2,
    "kind": "general",
    "unit": 8,
    "groupIndex": 7,
    "chapter": 2,
    "label": "유닛 8 · 챕터 2",
    "sourceIndex": 36
  },
  {
    "day": 45,
    "section": 2,
    "kind": "general",
    "unit": 8,
    "groupIndex": 7,
    "chapter": 3,
    "label": "유닛 8 · 챕터 3",
    "sourceIndex": 37
  },
  {
    "day": 46,
    "section": 2,
    "kind": "general",
    "unit": 8,
    "groupIndex": 7,
    "chapter": 4,
    "label": "유닛 8 · 챕터 4",
    "sourceIndex": 38
  },
  {
    "day": 47,
    "section": 2,
    "kind": "general",
    "unit": 8,
    "groupIndex": 7,
    "chapter": 5,
    "label": "유닛 8 · 챕터 5",
    "sourceIndex": 39
  },
  {
    "day": 48,
    "section": 2,
    "kind": "chart",
    "unit": null,
    "groupIndex": 13,
    "chapter": 3,
    "label": "차트 B-3",
    "sourceIndex": 67
  },
  {
    "day": 49,
    "section": 2,
    "kind": "general",
    "unit": 9,
    "groupIndex": 8,
    "chapter": 1,
    "label": "유닛 9 · 챕터 1",
    "sourceIndex": 40
  },
  {
    "day": 50,
    "section": 2,
    "kind": "general",
    "unit": 9,
    "groupIndex": 8,
    "chapter": 2,
    "label": "유닛 9 · 챕터 2",
    "sourceIndex": 41
  },
  {
    "day": 51,
    "section": 2,
    "kind": "general",
    "unit": 9,
    "groupIndex": 8,
    "chapter": 3,
    "label": "유닛 9 · 챕터 3",
    "sourceIndex": 42
  },
  {
    "day": 52,
    "section": 2,
    "kind": "general",
    "unit": 9,
    "groupIndex": 8,
    "chapter": 4,
    "label": "유닛 9 · 챕터 4",
    "sourceIndex": 43
  },
  {
    "day": 53,
    "section": 2,
    "kind": "general",
    "unit": 9,
    "groupIndex": 8,
    "chapter": 5,
    "label": "유닛 9 · 챕터 5",
    "sourceIndex": 44
  },
  {
    "day": 54,
    "section": 2,
    "kind": "chart",
    "unit": null,
    "groupIndex": 13,
    "chapter": 4,
    "label": "차트 B-4",
    "sourceIndex": 68
  },
  {
    "day": 55,
    "section": 3,
    "kind": "general",
    "unit": 10,
    "groupIndex": 9,
    "chapter": 1,
    "label": "유닛 10 · 챕터 1",
    "sourceIndex": 45
  },
  {
    "day": 56,
    "section": 3,
    "kind": "general",
    "unit": 10,
    "groupIndex": 9,
    "chapter": 2,
    "label": "유닛 10 · 챕터 2",
    "sourceIndex": 46
  },
  {
    "day": 57,
    "section": 3,
    "kind": "general",
    "unit": 10,
    "groupIndex": 9,
    "chapter": 3,
    "label": "유닛 10 · 챕터 3",
    "sourceIndex": 47
  },
  {
    "day": 58,
    "section": 3,
    "kind": "general",
    "unit": 10,
    "groupIndex": 9,
    "chapter": 4,
    "label": "유닛 10 · 챕터 4",
    "sourceIndex": 48
  },
  {
    "day": 59,
    "section": 3,
    "kind": "general",
    "unit": 10,
    "groupIndex": 9,
    "chapter": 5,
    "label": "유닛 10 · 챕터 5",
    "sourceIndex": 49
  },
  {
    "day": 60,
    "section": 3,
    "kind": "chart",
    "unit": null,
    "groupIndex": 13,
    "chapter": 5,
    "label": "차트 B-5",
    "sourceIndex": 69
  },
  {
    "day": 61,
    "section": 3,
    "kind": "general",
    "unit": 11,
    "groupIndex": 10,
    "chapter": 1,
    "label": "유닛 11 · 챕터 1",
    "sourceIndex": 50
  },
  {
    "day": 62,
    "section": 3,
    "kind": "general",
    "unit": 11,
    "groupIndex": 10,
    "chapter": 2,
    "label": "유닛 11 · 챕터 2",
    "sourceIndex": 51
  },
  {
    "day": 63,
    "section": 3,
    "kind": "general",
    "unit": 11,
    "groupIndex": 10,
    "chapter": 3,
    "label": "유닛 11 · 챕터 3",
    "sourceIndex": 53
  },
  {
    "day": 64,
    "section": 3,
    "kind": "general",
    "unit": 11,
    "groupIndex": 10,
    "chapter": 4,
    "label": "유닛 11 · 챕터 4",
    "sourceIndex": 52
  },
  {
    "day": 65,
    "section": 3,
    "kind": "general",
    "unit": 11,
    "groupIndex": 10,
    "chapter": 5,
    "label": "유닛 11 · 챕터 5",
    "sourceIndex": 54
  },
  {
    "day": 66,
    "section": 3,
    "kind": "chart",
    "unit": null,
    "groupIndex": 14,
    "chapter": 1,
    "label": "차트 C-1",
    "sourceIndex": 70
  },
  {
    "day": 67,
    "section": 3,
    "kind": "general",
    "unit": 12,
    "groupIndex": 11,
    "chapter": 1,
    "label": "유닛 12 · 챕터 1",
    "sourceIndex": 55
  },
  {
    "day": 68,
    "section": 3,
    "kind": "general",
    "unit": 12,
    "groupIndex": 11,
    "chapter": 2,
    "label": "유닛 12 · 챕터 2",
    "sourceIndex": 56
  },
  {
    "day": 69,
    "section": 3,
    "kind": "general",
    "unit": 12,
    "groupIndex": 11,
    "chapter": 3,
    "label": "유닛 12 · 챕터 3",
    "sourceIndex": 57
  },
  {
    "day": 70,
    "section": 3,
    "kind": "general",
    "unit": 12,
    "groupIndex": 11,
    "chapter": 4,
    "label": "유닛 12 · 챕터 4",
    "sourceIndex": 58
  },
  {
    "day": 71,
    "section": 3,
    "kind": "general",
    "unit": 12,
    "groupIndex": 11,
    "chapter": 5,
    "label": "유닛 12 · 챕터 5",
    "sourceIndex": 59
  },
  {
    "day": 72,
    "section": 3,
    "kind": "chart",
    "unit": null,
    "groupIndex": 14,
    "chapter": 2,
    "label": "차트 C-2",
    "sourceIndex": 71
  },
  {
    "day": 73,
    "section": 4,
    "kind": "general",
    "unit": 13,
    "groupIndex": 15,
    "chapter": 1,
    "label": "유닛 13 · 챕터 1",
    "sourceIndex": 75
  },
  {
    "day": 74,
    "section": 4,
    "kind": "general",
    "unit": 13,
    "groupIndex": 15,
    "chapter": 2,
    "label": "유닛 13 · 챕터 2",
    "sourceIndex": 76
  },
  {
    "day": 75,
    "section": 4,
    "kind": "general",
    "unit": 13,
    "groupIndex": 15,
    "chapter": 3,
    "label": "유닛 13 · 챕터 3",
    "sourceIndex": 77
  },
  {
    "day": 76,
    "section": 4,
    "kind": "general",
    "unit": 13,
    "groupIndex": 15,
    "chapter": 4,
    "label": "유닛 13 · 챕터 4",
    "sourceIndex": 78
  },
  {
    "day": 77,
    "section": 4,
    "kind": "general",
    "unit": 13,
    "groupIndex": 15,
    "chapter": 5,
    "label": "유닛 13 · 챕터 5",
    "sourceIndex": 79
  },
  {
    "day": 78,
    "section": 4,
    "kind": "chart",
    "unit": null,
    "groupIndex": 14,
    "chapter": 3,
    "label": "차트 C-3",
    "sourceIndex": 72
  },
  {
    "day": 79,
    "section": 4,
    "kind": "general",
    "unit": 14,
    "groupIndex": 16,
    "chapter": 1,
    "label": "유닛 14 · 챕터 1",
    "sourceIndex": 80
  },
  {
    "day": 80,
    "section": 4,
    "kind": "general",
    "unit": 14,
    "groupIndex": 16,
    "chapter": 2,
    "label": "유닛 14 · 챕터 2",
    "sourceIndex": 81
  },
  {
    "day": 81,
    "section": 4,
    "kind": "general",
    "unit": 14,
    "groupIndex": 16,
    "chapter": 3,
    "label": "유닛 14 · 챕터 3",
    "sourceIndex": 82
  },
  {
    "day": 82,
    "section": 4,
    "kind": "general",
    "unit": 14,
    "groupIndex": 16,
    "chapter": 4,
    "label": "유닛 14 · 챕터 4",
    "sourceIndex": 83
  },
  {
    "day": 83,
    "section": 4,
    "kind": "general",
    "unit": 14,
    "groupIndex": 16,
    "chapter": 5,
    "label": "유닛 14 · 챕터 5",
    "sourceIndex": 84
  },
  {
    "day": 84,
    "section": 4,
    "kind": "chart",
    "unit": null,
    "groupIndex": 14,
    "chapter": 4,
    "label": "차트 C-4",
    "sourceIndex": 73
  },
  {
    "day": 85,
    "section": 4,
    "kind": "general",
    "unit": 15,
    "groupIndex": 17,
    "chapter": 1,
    "label": "유닛 15 · 챕터 1",
    "sourceIndex": 85
  },
  {
    "day": 86,
    "section": 4,
    "kind": "general",
    "unit": 15,
    "groupIndex": 17,
    "chapter": 2,
    "label": "유닛 15 · 챕터 2",
    "sourceIndex": 86
  },
  {
    "day": 87,
    "section": 4,
    "kind": "general",
    "unit": 15,
    "groupIndex": 17,
    "chapter": 3,
    "label": "유닛 15 · 챕터 3",
    "sourceIndex": 87
  },
  {
    "day": 88,
    "section": 4,
    "kind": "general",
    "unit": 15,
    "groupIndex": 17,
    "chapter": 4,
    "label": "유닛 15 · 챕터 4",
    "sourceIndex": 88
  },
  {
    "day": 89,
    "section": 4,
    "kind": "chart",
    "unit": null,
    "groupIndex": 14,
    "chapter": 5,
    "label": "차트 C-5",
    "sourceIndex": 74
  },
  {
    "day": 90,
    "section": 4,
    "kind": "general",
    "unit": 15,
    "groupIndex": 17,
    "chapter": 5,
    "label": "유닛 15 · 챕터 5",
    "sourceIndex": 89
  }
];
const scheduleSegments = [
  {
    "section": 0,
    "kind": "general",
    "label": "유닛 1",
    "name": "주식의 주인",
    "intro": "주식의 의미와 주주의 권리, 배당의 종류와 받는 조건을 배워요.",
    "promise": "주주의 권리와 배당의 종류를 이해하고, 배당받기 위한 매수 시점을 판단할 수 있어요.",
    "days": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "section": 0,
    "kind": "chart",
    "label": "차트 A",
    "name": "차트 읽기의 기초",
    "intro": "차트의 시간·가격 축과 캔들의 가격·모양을 읽는 법을 배워요.",
    "promise": "차트의 시간과 가격을 읽고, 캔들의 네 가지 가격·모양과 그 의미를 설명할 수 있어요.",
    "days": [
      6
    ]
  },
  {
    "section": 0,
    "kind": "general",
    "label": "유닛 2",
    "name": "손익의 계산",
    "intro": "매수금액과 평가금액, 손익과 수익률로 투자 결과를 읽어봐요.",
    "promise": "계좌의 숫자에 막연히 놀라는 대신, 내 돈이 얼마나 달라졌는지 직접 읽고 설명할 수 있어요.",
    "days": [
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "section": 0,
    "kind": "chart",
    "label": "차트 A",
    "name": "차트 읽기의 기초",
    "intro": "차트의 시간·가격 축과 캔들의 가격·모양을 읽는 법을 배워요.",
    "promise": "차트의 시간과 가격을 읽고, 캔들의 네 가지 가격·모양과 그 의미를 설명할 수 있어요.",
    "days": [
      12
    ]
  },
  {
    "section": 0,
    "kind": "general",
    "label": "유닛 3",
    "name": "주식의 위험과 거래",
    "intro": "주식의 위험과 예금과의 차이, 주식이 거래되고 가격이 정해지는 과정을 배워요.",
    "promise": "주식의 위험과 예금과의 차이를 이해하고, 거래 상대와 가격이 만들어지는 과정을 설명할 수 있어요.",
    "days": [
      13,
      14,
      15,
      16,
      17
    ]
  },
  {
    "section": 0,
    "kind": "chart",
    "label": "차트 A",
    "name": "차트 읽기의 기초",
    "intro": "차트의 시간·가격 축과 캔들의 가격·모양을 읽는 법을 배워요.",
    "promise": "차트의 시간과 가격을 읽고, 캔들의 네 가지 가격·모양과 그 의미를 설명할 수 있어요.",
    "days": [
      18
    ]
  },
  {
    "section": 1,
    "kind": "general",
    "label": "유닛 4",
    "name": "주식의 가치 판단하기",
    "intro": "주가·시가총액·이익·PER을 비교하며 주식의 가격을 판단하는 법을 배워요.",
    "promise": "주가와 시가총액의 관계를 이해하고, 회사의 가격을 이익과 비교하며 PER의 의미와 한계를 설명할 수 있어요.",
    "days": [
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    "section": 1,
    "kind": "chart",
    "label": "차트 A",
    "name": "차트 읽기의 기초",
    "intro": "차트의 시간·가격 축과 캔들의 가격·모양을 읽는 법을 배워요.",
    "promise": "차트의 시간과 가격을 읽고, 캔들의 네 가지 가격·모양과 그 의미를 설명할 수 있어요.",
    "days": [
      24
    ]
  },
  {
    "section": 1,
    "kind": "general",
    "label": "유닛 5",
    "name": "회사가 실제로 남긴 돈",
    "intro": "회사가 돈을 버는 사업을 살펴보고, 매출과 비용으로 이익을 계산해요.",
    "promise": "회사가 무엇을 팔아 돈을 버는지 설명하고, 매출과 비용으로 이익을 계산해 흑자와 적자를 구분할 수 있어요.",
    "days": [
      25,
      26,
      27,
      28,
      29
    ]
  },
  {
    "section": 1,
    "kind": "chart",
    "label": "차트 A",
    "name": "차트 읽기의 기초",
    "intro": "차트의 시간·가격 축과 캔들의 가격·모양을 읽는 법을 배워요.",
    "promise": "차트의 시간과 가격을 읽고, 캔들의 네 가지 가격·모양과 그 의미를 설명할 수 있어요.",
    "days": [
      30
    ]
  },
  {
    "section": 1,
    "kind": "general",
    "label": "유닛 6",
    "name": "실적과 주가",
    "intro": "실적에 대한 기대와 실제 결과를 비교하며 주가 반응이 달라지는 이유를 배워요.",
    "promise": "실적과 주가가 다르게 움직이는 이유를 이해하고, 이미 반영된 기대와 회사의 장기적인 돈벌이를 함께 살펴볼 수 있어요.",
    "days": [
      31,
      32,
      33,
      34,
      35
    ]
  },
  {
    "section": 1,
    "kind": "chart",
    "label": "차트 B",
    "name": "차트 해석과 판단",
    "intro": "선 그림으로 지지·저항, 돌파·이탈, 역할 전환과 박스권을 배워요.",
    "promise": "차트에서 지지·저항, 돌파·이탈, 역할 전환과 박스권을 찾아 설명할 수 있어요.",
    "days": [
      36
    ]
  },
  {
    "section": 2,
    "kind": "general",
    "label": "유닛 7",
    "name": "금리와 환율",
    "intro": "금리와 환율의 뜻을 배우고, 변화가 기업과 투자에 미치는 영향을 알아봐요.",
    "promise": "금리와 환율의 뜻을 이해하고, 변화가 여행비와 회사의 비용·매출, 투자자의 선택에 미치는 영향을 설명할 수 있어요.",
    "days": [
      37,
      38,
      39,
      40,
      41
    ]
  },
  {
    "section": 2,
    "kind": "chart",
    "label": "차트 B",
    "name": "차트 해석과 판단",
    "intro": "선 그림으로 지지·저항, 돌파·이탈, 역할 전환과 박스권을 배워요.",
    "promise": "차트에서 지지·저항, 돌파·이탈, 역할 전환과 박스권을 찾아 설명할 수 있어요.",
    "days": [
      42
    ]
  },
  {
    "section": 2,
    "kind": "general",
    "label": "유닛 8",
    "name": "원자재",
    "intro": "원유와 금의 특징을 배우고, 가격 변화가 기업과 투자에 미치는 영향을 알아봐요.",
    "promise": "원유와 금의 특징을 구분하고, 원자재 가격 변화가 여행비와 기업에 미치는 영향을 설명할 수 있어요.",
    "days": [
      43,
      44,
      45,
      46,
      47
    ]
  },
  {
    "section": 2,
    "kind": "chart",
    "label": "차트 B",
    "name": "차트 해석과 판단",
    "intro": "선 그림으로 지지·저항, 돌파·이탈, 역할 전환과 박스권을 배워요.",
    "promise": "차트에서 지지·저항, 돌파·이탈, 역할 전환과 박스권을 찾아 설명할 수 있어요.",
    "days": [
      48
    ]
  },
  {
    "section": 2,
    "kind": "general",
    "label": "유닛 9",
    "name": "경제지표",
    "intro": "물가·고용·GDP·수출입 지표로 경제 상황을 읽는 법을 배워요.",
    "promise": "물가·고용·성장·수출입 지표가 무엇을 보여주는지 이해하고, 경제 뉴스의 숫자를 읽을 수 있어요.",
    "days": [
      49,
      50,
      51,
      52,
      53
    ]
  },
  {
    "section": 2,
    "kind": "chart",
    "label": "차트 B",
    "name": "차트 해석과 판단",
    "intro": "선 그림으로 지지·저항, 돌파·이탈, 역할 전환과 박스권을 배워요.",
    "promise": "차트에서 지지·저항, 돌파·이탈, 역할 전환과 박스권을 찾아 설명할 수 있어요.",
    "days": [
      54
    ]
  },
  {
    "section": 3,
    "kind": "general",
    "label": "유닛 10",
    "name": "실적",
    "intro": "실적발표·전망·계약·기술 소식이 회사의 매출과 이익에 어떻게 연결되는지 살펴봐요.",
    "promise": "실적발표·전망·계약·기술과 인허가 소식을 구분하고, 실제 돈벌이로 이어지기 위해 확인할 조건을 설명할 수 있어요.",
    "days": [
      55,
      56,
      57,
      58,
      59
    ]
  },
  {
    "section": 3,
    "kind": "chart",
    "label": "차트 B",
    "name": "차트 해석과 판단",
    "intro": "선 그림으로 지지·저항, 돌파·이탈, 역할 전환과 박스권을 배워요.",
    "promise": "차트에서 지지·저항, 돌파·이탈, 역할 전환과 박스권을 찾아 설명할 수 있어요.",
    "days": [
      60
    ]
  },
  {
    "section": 3,
    "kind": "general",
    "label": "유닛 11",
    "name": "자금조달 및 주주환원",
    "intro": "실제 사례로 유상·무상증자와 자사주 매입·소각의 의미, 주가 반응을 배워요.",
    "promise": "유상증자와 자사주 매입·소각, 무상증자 발표가 회사의 자금·주식 수와 기존 주주에게 무엇을 바꾸는지 설명할 수 있어요.",
    "days": [
      61,
      62,
      63,
      64,
      65
    ]
  },
  {
    "section": 3,
    "kind": "chart",
    "label": "차트 C",
    "name": "거래량과 추세",
    "intro": "가격·거래량·이동평균선을 함께 보며 주가의 추세를 읽는 법을 배워요.",
    "promise": "가격·거래량·이동평균선을 함께 읽고, 하루의 움직임과 일정 기간의 추세를 구분할 수 있어요.",
    "days": [
      66
    ]
  },
  {
    "section": 3,
    "kind": "general",
    "label": "유닛 12",
    "name": "수급",
    "intro": "투자자별 매매와 공매도·신용융자 자료로 주식 수급을 읽는 법을 배워요.",
    "promise": "투자자별 매매와 공매도·신용융자 잔고가 무엇을 보여주는지 이해하고, 확인한 수급과 주가 예상을 구분할 수 있어요.",
    "days": [
      67,
      68,
      69,
      70,
      71
    ]
  },
  {
    "section": 3,
    "kind": "chart",
    "label": "차트 C",
    "name": "거래량과 추세",
    "intro": "가격·거래량·이동평균선을 함께 보며 주가의 추세를 읽는 법을 배워요.",
    "promise": "가격·거래량·이동평균선을 함께 읽고, 하루의 움직임과 일정 기간의 추세를 구분할 수 있어요.",
    "days": [
      72
    ]
  },
  {
    "section": 4,
    "kind": "general",
    "label": "유닛 13",
    "name": "투자금과 포트폴리오",
    "intro": "내 상황에 맞는 투자금을 정하고, 자산을 나누고 비중을 점검하는 법을 배워요.",
    "promise": "돈을 쓸 시점과 손실 감당 여건에 맞춰 투자금과 포트폴리오를 정하고, 비중을 점검할 기준을 설명할 수 있어요.",
    "days": [
      73,
      74,
      75,
      76,
      77
    ]
  },
  {
    "section": 4,
    "kind": "chart",
    "label": "차트 C",
    "name": "거래량과 추세",
    "intro": "가격·거래량·이동평균선을 함께 보며 주가의 추세를 읽는 법을 배워요.",
    "promise": "가격·거래량·이동평균선을 함께 읽고, 하루의 움직임과 일정 기간의 추세를 구분할 수 있어요.",
    "days": [
      78
    ]
  },
  {
    "section": 4,
    "kind": "general",
    "label": "유닛 14",
    "name": "매수와 매도의 기준",
    "intro": "매수 이유와 투입 금액, 추가매수·매도 조건을 정해 투자 기준을 세워요.",
    "promise": "매수 근거와 투입 금액, 추가매수·매도 조건을 정해 한 건의 투자 계획을 세울 수 있어요.",
    "days": [
      79,
      80,
      81,
      82,
      83
    ]
  },
  {
    "section": 4,
    "kind": "chart",
    "label": "차트 C",
    "name": "거래량과 추세",
    "intro": "가격·거래량·이동평균선을 함께 보며 주가의 추세를 읽는 법을 배워요.",
    "promise": "가격·거래량·이동평균선을 함께 읽고, 하루의 움직임과 일정 기간의 추세를 구분할 수 있어요.",
    "days": [
      84
    ]
  },
  {
    "section": 4,
    "kind": "general",
    "label": "유닛 15",
    "name": "나의 투자 계획",
    "intro": "투자 상황에 배운 내용을 적용하고, 나만의 투자 계획을 한 장으로 정리해요.",
    "promise": "여러 투자 상황에 자신의 기준을 적용하고, 포트폴리오와 매매·점검 기준을 담은 한 장의 투자 계획서를 완성할 수 있어요.",
    "days": [
      85,
      86,
      87,
      88
    ]
  },
  {
    "section": 4,
    "kind": "chart",
    "label": "차트 C",
    "name": "거래량과 추세",
    "intro": "가격·거래량·이동평균선을 함께 보며 주가의 추세를 읽는 법을 배워요.",
    "promise": "가격·거래량·이동평균선을 함께 읽고, 하루의 움직임과 일정 기간의 추세를 구분할 수 있어요.",
    "days": [
      89
    ]
  },
  {
    "section": 4,
    "kind": "general",
    "label": "유닛 15",
    "name": "나의 투자 계획",
    "intro": "투자 상황에 배운 내용을 적용하고, 나만의 투자 계획을 한 장으로 정리해요.",
    "promise": "여러 투자 상황에 자신의 기준을 적용하고, 포트폴리오와 매매·점검 기준을 담은 한 장의 투자 계획서를 완성할 수 있어요.",
    "days": [
      90
    ]
  }
];
