import { PersonalityResult } from '../types';

export const personalityResults: Record<string, PersonalityResult> = {
  'INTJ': {
    type: 'INTJ',
    title: { 
      zh: '建筑师', en: 'Architect', es: 'Arquitecto', fr: 'Architecte', hi: 'वास्तुकार', de: 'Architekt', 
      ja: '建築家', it: 'Architetto', pt: 'Arquiteto', vi: 'Kiến trúc sư', th: 'นักออกแบบ', ar: 'المهندس المعماري', 
      tl: 'Arkitekto', bn: 'স্থপতি', ru: 'Архитектор', ur: 'آرکیٹیکٹ' 
    },
    description: { 
      zh: '富有想象力和战略性的思想家，一切皆在计划之中。', 
      en: 'Imaginative and strategic thinkers, with a plan for everything.',
      es: 'Pensadores imaginativos y estratégicos, con un plan para todo.',
      fr: 'Penseurs imaginatifs et stratégiques, avec un plan pour tout.',
      hi: 'कल्पनाशील और रणनीतिक विचारक, हर चीज के लिए एक योजना के साथ।',
      de: 'Fantasievolle und strategische Denker, mit einem Plan für alles.',
      ja: 'あらゆるものに対する計画を持つ、想像力豊かで戦略的な思想家。',
      it: 'Pensatori fantasiosi e strategici, con un piano per tutto.',
      pt: 'Pensadores imaginativos e estratégicos, com um plano para tudo.',
      vi: 'Những nhà tư tưởng giàu trí tưởng tượng và chiến lược, luôn có kế hoạch cho mọi thứ.',
      th: 'นักคิดที่มีจินตนาการและกลยุทธ์ พร้อมแผนการสำหรับทุกสิ่ง',
      ar: 'مفكرون خياليون واستراتيجيون ، مع خطة لكل شيء.',
      tl: 'Mapanlikha at estratehikong nag-iisip, na may plano para sa lahat.',
      bn: 'কল্পনাপ্রসূত এবং কৌশলগত চিন্তাবিদ, সবকিছুর জন্য একটি পরিকল্পনা সহ।',
      ru: 'Творческие и стратегические мыслители, у которых есть план на любой случай.',
      ur: 'تخیلاتی اور تزویراتی مفکرین، ہر چیز کے لیے ایک منصوبے کے ساتھ۔'
    },
    image_color: '#88619a',
    traits: []
  },
  'INTP': {
    type: 'INTP',
    title: { 
      zh: '逻辑学家', en: 'Logician', es: 'Lógico', fr: 'Logicien', hi: 'तर्कशास्त्री', de: 'Logiker', 
      ja: '論理学者', it: 'Logico', pt: 'Lógico', vi: 'Nhà logic học', th: 'นักตรรกวิทยา', ar: 'المنطقي', 
      tl: 'Lohiko', bn: 'যৌক্তিক', ru: 'Логик', ur: 'ماہر منطق' 
    },
    description: { 
      zh: '具有创造力的发明家，对知识有着止不住的渴望。', 
      en: 'Innovative inventors with an unquenchable thirst for knowledge.',
      es: 'Inventores innovadores con una sed insaciable de conocimiento.',
      fr: 'Inventeurs innovants avec une soif insatiable de connaissances.',
      hi: 'ज्ञान की कभी न मिटने वाली प्यास वाले नवोन्मेषी आविष्कारक।',
      de: 'Innovative Erfinder mit einem unstillbaren Wissensdurst.',
      ja: '知識に対する飽くなき渇望を持つ、革新的な発明家。',
      it: 'Inventori innovativi con un\'insaziabile sete di conoscenza.',
      pt: 'Inventores inovadores com uma sede insaciável de conhecimento.',
      vi: 'Những nhà phát minh đổi mới với khát khao tri thức không bao giờ cạn.',
      th: 'นักประดิษฐ์นวัตกรรมที่มีความกระหายในความรู้อย่างไม่หยุดยั้ง',
      ar: 'مخترعون مبتكرون مع عطش لا يرتوي للمعرفة.',
      tl: 'Mga makabagong imbentor na may hindi mapawi na pagkauhaw sa kaalaman.',
      bn: 'জ্ঞানের জন্য একটি অতৃপ্ত তৃষ্ণা সহ উদ্ভাবনী উদ্ভাবক।',
      ru: 'Инновационные изобретатели с неутолимой жаждой знаний.',
      ur: 'علم کی کبھی نہ ختم ہونے والی پیاس کے ساتھ اختراعی موجد۔'
    },
    image_color: '#88619a',
    traits: []
  },
  'ENTJ': {
    type: 'ENTJ',
    title: { 
      zh: '指挥官', en: 'Commander', es: 'Comandante', fr: 'Commandant', hi: 'कमांडर', de: 'Kommandeur', 
      ja: '指揮官', it: 'Comandante', pt: 'Comandante', vi: 'Nhà điều hành', th: 'ผู้บัญชาการ', ar: 'القائد', 
      tl: 'Kumander', bn: 'কমান্ডার', ru: 'Командир', ur: 'کمانڈر' 
    },
    description: { 
      zh: '大胆、富有想象力且意志强大的领导者，总能找到或创造出解决办法。', 
      en: 'Bold, imaginative and strong-willed leaders, always finding a way – or making one.',
      es: 'Líderes audaces, imaginativos y decididos, que siempre encuentran un camino o lo crean.',
      fr: 'Des leaders audacieux, imaginatifs et volontaires, qui trouvent toujours un moyen - ou en créent un.',
      hi: 'साहसी, कल्पनाशील और दृढ़ इच्छाशक्ति वाले नेता, जो हमेशा रास्ता खोजते हैं - या बनाते हैं।',
      de: 'Kühne, fantasievolle und willensstarke Führungspersönlichkeiten, die immer einen Weg finden – oder einen schaffen.',
      ja: '大胆で想像力豊か、そして意志の強いリーダー。常に道を見つけ、あるいは自ら道を切り開く。',
      it: 'Leader audaci, fantasiosi e volitivi, che trovano sempre una via – o ne creano una.',
      pt: 'Líderes ousados, imaginativos e de vontade forte, sempre encontrando um caminho – ou criando um.',
      vi: 'Những nhà lãnh đạo táo bạo, giàu trí tưởng tượng và có ý chí mạnh mẽ, luôn tìm ra con đường - hoặc tạo ra nó.',
      th: 'ผู้นำที่กล้าหาญ มีจินตนาการ และมีเจตจำนงที่แรงกล้า มักจะหาทางออกหรือสร้างทางออกได้เสมอ',
      ar: 'قادة جريئون وخياليون وذوو إرادة قوية ، يجدون دائمًا وسيلة - أو يصنعونها.',
      tl: 'Matapang, mapanlikha at malakas ang loob na mga pinuno, laging nakakahanap ng paraan – o gumagawa ng isa.',
      bn: 'সাহসী, কল্পনাপ্রসূত এবং দৃঢ় ইচ্ছাশক্তিসম্পন্ন নেতা, যারা সর্বদা একটি পথ খুঁজে পায় - অথবা একটি তৈরি করে।',
      ru: 'Смелые, обладающие богатым воображением и волевые лидеры, которые всегда находят выход или создают его.',
      ur: 'نڈر، تخیلاتی اور مضبوط ارادے والے قائدین، جو ہمیشہ راستہ تلاش کرتے ہیں - یا بناتے ہیں۔'
    },
    image_color: '#88619a',
    traits: []
  },
  'ENTP': {
    type: 'ENTP',
    title: { 
      zh: '辩论家', en: 'Debater', es: 'Innovador', fr: 'Innovateur', hi: 'बहस करने वाला', de: 'Debattierer', 
      ja: '討論者', it: 'Debatitore', pt: 'Debatedor', vi: 'Nhà tranh luận', th: 'นักโต้พาที', ar: 'المحاور', 
      tl: 'Debater', bn: 'বিতার্কিক', ru: 'Полемист', ur: 'بحث کرنے والا' 
    },
    description: { 
      zh: '聪明、好奇的思想家，无法抗拒智力挑战。', 
      en: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
      es: 'Pensadores inteligentes y curiosos que no pueden resistirse a un desafío intelectual.',
      fr: 'Des penseurs intelligents et curieux qui ne peuvent résister à un défi intellectuel.',
      hi: 'स्मार्ट और जिज्ञासु विचारक जो बौद्धिक चुनौती का विरोध नहीं कर सकते।',
      de: 'Kluge und neugierige Denker, die einer intellektuellen Herausforderung nicht widerstehen können.',
      ja: '知的な挑戦に抗うことができない、賢くて好奇心旺盛な思想家。',
      it: 'Pensatori intelligenti e curiosi che non sanno resistere a una sfida intellettuale.',
      pt: 'Pensadores inteligentes e curiosos que não resistem a um desafio intelectual.',
      vi: 'Những nhà tư tưởng thông minh và tò mò, không thể cưỡng lại một thử thách trí tuệ.',
      th: 'นักคิดที่ฉลาดและอยากรู้อยากเห็นที่ไม่สามารถต้านทานความท้าทายทางปัญญาได้',
      ar: 'مفكرون أذكياء وفضوليون لا يستطيعون مقاومة التحدي الفكري.',
      tl: 'Matalino at mausisa na mga nag-iisip na hindi mapigilan ang isang intelektwal na hamon.',
      bn: 'স্মার্ট এবং কৌতূহলী চিন্তাবিদ যারা বুদ্ধিবৃত্তিক চ্যালেঞ্জ প্রতিরোধ করতে পারে না।',
      ru: 'Умные и любознательные мыслители, которые не могут устоять перед интеллектуальным вызовом.',
      ur: 'ہوشیار اور متجسس مفکرین جو فکری چیلنج کا مقابلہ کرنے سے نہیں رہ سکتے۔'
    },
    image_color: '#88619a',
    traits: []
  },
  'INFJ': {
    type: 'INFJ',
    title: { 
      zh: '提倡者', en: 'Advocate', es: 'Abogado', fr: 'Avocat', hi: 'अधिवक्ता', de: 'Advokat', 
      ja: '提唱者', it: 'Sostenitore', pt: 'Advogado', vi: 'Người che chở', th: 'ผู้แนะนำ', ar: 'المحامي', 
      tl: 'Tagapagtanggol', bn: 'উকিল', ru: 'Активист', ur: 'وکیل' 
    },
    description: { 
      zh: '安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。', 
      en: 'Quiet and mystical, yet very inspiring and tireless idealists.',
      es: 'Idealistas silenciosos y místicos, pero muy inspiradores e incansables.',
      fr: 'Idéalistes calmes et mystiques, mais très inspirants et infatigables.',
      hi: 'शांत और रहस्यमय, फिर भी बहुत प्रेरक और अथक आदर्शवादी।',
      de: 'Stille und mystische, aber sehr inspirierende und unermüdliche Idealisten.',
      ja: '静かで神秘的でありながら、非常に刺激的でたゆまぬ理想主義者。',
      it: 'Idealisti calmi e mistici, ma molto stimolanti e instancabili.',
      pt: 'Idealistas quietos e místicos, mas muito inspiradores e incansáveis.',
      vi: 'Những người duy tâm thầm lặng và huyền bí, nhưng rất truyền cảm hứng và không mệt mỏi.',
      th: 'นักอุดมคติที่เงียบสงบและลึกลับ แต่สร้างแรงบันดาลใจและไม่รู้จักเหน็ดเหนื่อย',
      ar: "مثاليون هادئون وغامضون ، لكنهم ملهمون للغاية ولا يكلون.",
      tl: 'Tahimik at mystical, ngunit napaka-inspiring at walang pagod na mga idealista.',
      bn: 'শান্ত এবং রহস্যময়, তবুও খুব অনুপ্রেরণাদায়ক এবং অক্লান্ত আদর্শবাদী।',
      ru: 'Тихие и мистические, но очень вдохновляющие и неутомимые идеалисты.',
      ur: 'خاموش اور پراسرار، پھر بھی بہت متاثر کن اور انتھک آئیڈیلسٹ۔'
    },
    image_color: '#33a474',
    traits: []
  },
  'INFP': {
    type: 'INFP',
    title: { 
      zh: '调解者', en: 'Mediator', es: 'Mediador', fr: 'Médiateur', hi: 'मध्यस्थ', de: 'Mediator', 
      ja: '仲介者', it: 'Mediatore', pt: 'Mediador', vi: 'Người hòa giải', th: 'ผู้ไกล่เกลี่ย', ar: 'الوسيط', 
      tl: 'Tagapamagitan', bn: 'মধ্যস্থতাকারী', ru: 'Посредник', ur: 'ثالث' 
    },
    description: { 
      zh: '诗意、善良且无私的人，总是渴望帮助他人。', 
      en: 'Poetic, kind and altruistic people, always eager to help a good cause.',
      es: 'Personas poéticas, amables y altruistas, siempre dispuestas a ayudar a una buena causa.',
      fr: 'Des personnes poétiques, gentilles et altruistes, toujours prêtes à aider une bonne cause.',
      hi: 'काव्यात्मक, दयालु और परोपकारी लोग, जो हमेशा किसी अच्छे काम में मदद करने के लिए उत्सुक रहते हैं।',
      de: 'Poetische, gütige und altruistische Menschen, die immer bereit sind, für eine gute Sache zu helfen.',
      ja: '詩的で優しく利他的な人々。常に良い大義のために助けようとしている。',
      it: 'Persone poetiche, gentili e altruiste, sempre desiderose di aiutare una buona causa.',
      pt: 'Pessoas poéticas, gentis e altruístas, sempre ansiosas por ajudar uma boa causa.',
      vi: 'Những người thơ mộng, tốt bụng và vị tha, luôn mong muốn giúp đỡ một mục đích tốt đẹp.',
      th: 'คนที่อ่อนโยน มีเมตตา และเห็นแก่ประโยชน์ส่วนรวม มักจะกระตือรือร้นที่จะช่วยเหลือผู้อื่นเสมอ',
      ar: 'أشخاص شاعريون ولطفاء ومؤثرون ، يتوقون دائمًا للمساعدة في قضية نبيلة.',
      tl: 'Poetic, mabait at altruistic na mga tao, laging sabik na tumulong sa isang magandang layunin.',
      bn: 'কাব্যিক, সদয় এবং পরোপকারী মানুষ, সর্বদা একটি ভালো কাজে সাহায্য করতে আগ্রহী।',
      ru: 'Поэтичные, добрые и альтруистичные люди, всегда готовые помочь благому делу.',
      ur: 'شاعرانہ، مہربان اور بے غرض لوگ، جو ہمیشہ اچھے کام میں مدد کے لیے بے چین رہتے ہیں۔'
    },
    image_color: '#33a474',
    traits: []
  },
  'ENFJ': {
    type: 'ENFJ',
    title: { 
      zh: '主人公', en: 'Protagonist', es: 'Protagonista', fr: 'Protagoniste', hi: 'नायक', de: 'Protagonist', 
      ja: '主人公', it: 'Protagonista', pt: 'Protagonista', vi: 'Người dẫn dắt', th: 'ตัวเอก', ar: 'البطل', 
      tl: 'Protagonista', bn: 'নায়ক', ru: 'Тренер', ur: 'مرکزی کردار' 
    },
    description: { 
      zh: '富有魅力、鼓舞人心的领导者，能够使听众着迷。', 
      en: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
      es: 'Líderes carismáticos e inspiradores, capaces de cautivar a sus oyentes.',
      fr: 'Des leaders charismatiques et inspirants, capables de fasciner leurs auditeurs.',
      hi: 'करिश्माई और प्रेरक नेता, अपने श्रोताओं को मंत्रमुग्ध करने में सक्षम।',
      de: 'Charismatische und inspirierende Führungspersönlichkeiten, die ihre Zuhörer in ihren Bann ziehen können.',
      ja: '聴衆を魅了することができる、カリスマ的で刺激的なリーダー。',
      it: 'Leader carismatici e ispiratori, in grado di ipnotizzare i propri ascoltatori.',
      pt: 'Líderes carismáticos e inspiradores, capazes de hipnotizar os seus ouvintes.',
      vi: 'Những nhà lãnh đạo lôi cuốn và truyền cảm hứng, có khả năng mê hoặc người nghe.',
      th: 'ผู้นำที่มีเสน่ห์และสร้างแรงบันดาลใจ สามารถสะกดผู้ฟังได้',
      ar: 'قادة كاريزميون وملهمون ، قادرون على فتن مستمعيهم.',
      tl: 'Charismatic at nakaka-inspire na mga lider, na kayang humanga sa kanilang mga tagapakinig.',
      bn: 'ক্যারিশম্যাটিক এবং অনুপ্রেরণাদায়ক নেতা, তাদের শ্রোতাদের মন্ত্রমুগ্ধ করতে সক্ষম।',
      ru: 'Харизматичные и вдохновляющие лидеры, способные заворожить своих слушателей.',
      ur: 'کرشماتی اور متاثر کن قائدین، جو اپنے سامعین کو مسحور کرنے کی صلاحیت رکھتے ہیں۔'
    },
    image_color: '#33a474',
    traits: []
  },
  'ENFP': {
    type: 'ENFP',
    title: { 
      zh: '竞选者', en: 'Campaigner', es: 'Activista', fr: 'Inspirateur', hi: 'अभियान चलाने वाला', de: 'Aktivist', 
      ja: '広報運動家', it: 'Attivista', pt: 'Ativista', vi: 'Người truyền cảm hứng', th: 'นักรณรงค์', ar: 'المناضل', 
      tl: 'Campaigner', bn: 'প্রচারক', ru: 'Борец', ur: 'مہم چلانے والا' 
    },
    description: { 
      zh: '热情、创造力强且爱社交的自由灵魂，总能找到理由微笑。', 
      en: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
      es: 'Espíritus libres, entusiastas, creativos y sociables, que siempre encuentran un motivo para sonreír.',
      fr: 'Des esprits libres enthousiastes, créatifs et sociables, qui trouvent toujours une raison de sourire.',
      hi: 'उत्साही, रचनात्मक और मिलनसार मुक्त आत्माएं, जो हमेशा मुस्कुराने का कारण ढूंढ सकती हैं।',
      de: 'Begeisterungsfähige, kreative und gesellige Freigeister, die immer einen Grund zum Lächeln finden.',
      ja: '熱狂的で創造的、そして社交的な自由な精神の持ち主。常に笑顔の理由を見つけることができる。',
      it: 'Spiriti liberi entusiasti, creativi e socievoli, che sanno sempre trovare un motivo per sorridere.',
      pt: 'Espíritos livres entusiastas, criativos e sociáveis, que conseguem sempre encontrar um motivo para sorrir.',
      vi: 'Những tâm hồn tự do nhiệt huyết, sáng tạo và hòa đồng, luôn tìm được lý do để mỉm cười.',
      th: 'คนที่มีจิตวิญญาณอิสระ กระตือรือร้น สร้างสรรค์ และเข้ากับคนง่าย มักจะหาเหตุผลที่จะยิ้มได้เสมอ',
      ar: 'أرواح حرة متحمسة ومبدعة واجتماعية ، يمكنها دائمًا العثور على سبب للابتسام.',
      tl: 'Masigasig, malikhain at palakaibigan na malayang espiritu, na laging nakakahanap ng dahilan para ngumiti.',
      bn: 'উত্সাহী, সৃজনশীল এবং মিশুক মুক্ত আত্মা, যারা সর্বদা হাসির কারণ খুঁজে পায়।',
      ru: 'Полные энтузиазма, творческие и общительные свободные личности, которые всегда находят повод для улыбки.',
      ur: 'پرجوش، تخلیقی اور ملنسار آزاد روحیں، جو ہمیشہ مسکرانے کی کوئی نہ کوئی وجہ تلاش کر سکتی ہیں۔'
    },
    image_color: '#33a474',
    traits: []
  },
  'ISTJ': {
    type: 'ISTJ',
    title: { 
      zh: '物流师', en: 'Logistician', es: 'Logista', fr: 'Logisticien', hi: 'रसद विशेषज्ञ', de: 'Logistiker', 
      ja: '管理者', it: 'Logista', pt: 'Logístico', vi: 'Người thực thi', th: 'นักบริหารจัดการ', ar: 'اللوجستي', 
      tl: 'Logistik', bn: 'লজিস্টিকিয়ান', ru: 'Администратор', ur: 'لاجسٹک ماہر' 
    },
    description: { 
      zh: '务实且注重事实的人，可靠性不容置疑。', 
      en: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
      es: 'Personas prácticas y centradas en los hechos, cuya fiabilidad es incuestionable.',
      fr: 'Des individus pragmatiques et soucieux des faits, dont la fiabilité ne peut être mise en doute.',
      hi: 'व्यावहारिक और तथ्य-मानसिक व्यक्ति, जिनकी विश्वसनीयता पर संदेह नहीं किया जा सकता है।',
      de: 'Praktische und faktenorientierte Personen, deren Zuverlässigkeit unbestritten ist.',
      ja: '実用的で事実を重視する個人。その信頼性は疑う余地がない。',
      it: 'Individui pratici e orientati ai fatti, la cui affidabilità non può essere messa in dubbio.',
      pt: 'Indivíduos práticos e orientados para factos, cuja fiabilidade não pode ser posta em causa.',
      vi: 'Những cá nhân thực tế và coi trọng sự thật, độ tin cậy của họ là không thể bàn cãi.',
      th: 'บุคคลที่ปฏิบัติจริงและยึดถือข้อเท็จจริง ซึ่งความน่าเชื่อถือไม่สามารถสงสัยได้',
      ar: 'أفراد عمليون وواقعيون ، لا يمكن التشكيك في موثوقيتهم.',
      tl: 'Praktikal at fact-minded na mga indibidwal, na ang pagiging maaasahan ay hindi mapagdudahan.',
      bn: 'ব্যবহারিক এবং তথ্য-মনস্ক ব্যক্তি, যাদের নির্ভরযোগ্যতা সন্দেহ করা যায় না।',
      ru: 'Практичные и ориентированные на факты люди, в надежности которых нельзя сомневаться.',
      ur: 'عملی اور حقیقت پسند افراد، جن کی جانفشانی پر شک نہیں کیا جا سکتا۔'
    },
    image_color: '#4298b4',
    traits: []
  },
  'ISFJ': {
    type: 'ISFJ',
    title: { 
      zh: '守卫者', en: 'Defender', es: 'Defensor', fr: 'Défenseur', hi: 'रक्षक', de: 'Verteidiger', 
      ja: '擁護者', it: 'Difensore', pt: 'Defensor', vi: 'Người bảo vệ', th: 'ผู้พิทักษ์', ar: 'المدافع', 
      tl: 'Tagapagtanggol', bn: 'রক্ষক', ru: 'Защитник', ur: 'محافظ' 
    },
    description: { 
      zh: '非常专注而温暖的守护者，时刻准备着保护爱戴的人。', 
      en: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
      es: 'Protectores muy dedicados y cálidos, siempre listos para defender a sus seres queridos.',
      fr: 'Des protecteurs très dévoués et chaleureux, toujours prêts à défendre leurs proches.',
      hi: 'बहुत समर्पित और गर्म रक्षक, अपने प्रियजनों की रक्षा के लिए हमेशा तैयार।',
      de: 'Sehr engagierte und herzliche Beschützer, die immer bereit sind, ihre Lieben zu verteidigen.',
      ja: '非常に献身的で温かい擁護者。常に愛する人々を守る準備ができている。',
      it: 'Protettori molto devoti e calorosi, sempre pronti a difendere i propri cari.',
      pt: 'Protetores muito dedicados e calorosos, sempre prontos para defender os seus entes queridos.',
      vi: 'Những người bảo vệ rất tận tâm và ấm áp, luôn sẵn sàng bảo vệ những người thân yêu của mình.',
      th: 'ผู้พิทักษ์ที่ทุ่มเทและอบอุ่นมาก พร้อมที่จะปกป้องคนที่เขารักเสมอ',
      ar: 'حماة متفانون ودافئون للغاية ، ومستعدون دائمًا للدفاع عن أحبائهم.',
      tl: 'Napaka-dedikado at mainit na tagapagtanggol, laging handang ipagtanggol ang kanilang mga mahal sa buhay.',
      bn: 'খুব নিবেদিতপ্রাণ এবং উষ্ণ রক্ষক, সর্বদা তাদের প্রিয়জনদের রক্ষা করার জন্য প্রস্তুত।',
      ru: 'Очень преданные и теплые защитники, всегда готовые защитить своих близких.',
      ur: 'بہت سرشار اور گرمجوش محافظ، جو ہمیشہ اپنے پیاروں کے دفاع کے لیے تیار رہتے ہیں۔'
    },
    image_color: '#4298b4',
    traits: []
  },
  'ESTJ': {
    type: 'ESTJ',
    title: { 
      zh: '总经理', en: 'Executive', es: 'Ejecutivo', fr: 'Directeur', hi: 'कार्यकारी', de: 'Exekutive', 
      ja: '幹部', it: 'Dirigente', pt: 'Executivo', vi: 'Người quản lý', th: 'ผู้บริหาร', ar: 'التنفيذي', 
      tl: 'Ehekutibo', bn: 'নির্বাহী', ru: 'Менеджер', ur: 'ایگزیکٹو' 
    },
    description: { 
      zh: '优秀的管理者，在管理事务或人员方面无与伦比。', 
      en: 'Excellent administrators, unsurpassed at managing things – or people.',
      es: 'Excelentes administradores, inigualables en la gestión de cosas o personas.',
      fr: 'D\'excellents administrateurs, inégalés pour gérer les choses - ou les gens.',
      hi: 'उत्कृष्ट प्रशासक, चीजों - या लोगों के प्रबंधन में बेजोड़।',
      de: 'Hervorragende Administratoren, unübertroffen in der Verwaltung von Dingen – oder Menschen.',
      ja: '物事や人々を管理することにおいて、他に類を見ないほど優れた管理者。',
      it: 'Ottimi amministratori, insuperabili nella gestione di cose o persone.',
      pt: 'Excelentes administradores, insuperáveis na gestão de coisas – ou pessoas.',
      vi: 'Những nhà quản trị xuất sắc, không ai sánh kịp trong việc quản lý sự việc - hoặc con người.',
      th: 'นักบริหารที่ยอดเยี่ยม ไม่เป็นรองใครในการจัดการสิ่งต่างๆ หรือผู้คน',
      ar: 'إداريون ممتازون ، لا يضاهون في إدارة الأشياء - أو الأشخاص.',
      tl: 'Mahusay na tagapangasiwa, hindi mapapantayan sa pamamahala ng mga bagay – o mga tao.',
      bn: 'চমৎকার প্রশাসক, জিনিসপত্র বা লোক পরিচালনার ক্ষেত্রে অতুলনীয়।',
      ru: 'Отличные администраторы, непревзойденные в управлении делами или людьми.',
      ur: 'بہترین منتظمین، چیزوں یا لوگوں کے انتظام میں بے مثال۔'
    },
    image_color: '#4298b4',
    traits: []
  },
  'ESFJ': {
    type: 'ESFJ',
    title: { 
      zh: '执政官', en: 'Consul', es: 'Cónsul', fr: 'Consul', hi: 'काउंसुल', de: 'Konsul', 
      ja: '領事', it: 'Console', pt: 'Cônsul', vi: 'Người quan tâm', th: 'กงสุล', ar: 'القنصل', 
      tl: 'Konsul', bn: 'কনসাল', ru: 'Консул', ur: 'کونسل' 
    },
    description: { 
      zh: '极度热心、社交能力强且受欢迎的人，总是渴望帮助他人。', 
      en: 'Extraordinarily caring, social and popular people, always eager to help.',
      es: 'Personas extraordinariamente atentas, sociales y populares, siempre dispuestas a ayudar.',
      fr: 'Des personnes extraordinairement attentionnées, sociales et populaires, toujours prêtes à aider.',
      hi: 'असाधारण रूप से देखभाल करने वाले, मिलनसार और लोकप्रिय लोग, जो हमेशा मदद के लिए उत्सुक रहते हैं।',
      de: 'Außergewöhnlich fürsorgliche, gesellige und beliebte Menschen, die immer gerne helfen.',
      ja: '並外れて思いやりがあり、社交的で人気のある人々。常に助けようとしている。',
      it: 'Persone straordinariamente premurose, socievoli e popolari, sempre desiderose di aiutare.',
      pt: 'Pessoas extraordinariamente carinhosas, sociais e populares, sempre ansiosas por ajudar.',
      vi: 'Những người cực kỳ quan tâm, hòa đồng và được yêu mến, luôn mong muốn giúp đỡ.',
      th: 'คนที่เอาใจใส่ เข้ากับคนง่าย และเป็นที่นิยมอย่างยิ่ง มักจะกระตือรือร้นที่จะช่วยเหลือเสมอ',
      ar: 'أشخاص يهتمون بشكل استثنائي واجتماعيون ومحبوبون ، يتوقون دائمًا للمساعدة.',
      tl: 'Extraordinarily mapagmalasakit, panlipunan at tanyag na mga tao, laging sabik na tumulong.',
      bn: 'অসাধারণ যত্নশীল, সামাজিক এবং জনপ্রিয় মানুষ, সর্বদা সাহায্য করতে আগ্রহী।',
      ru: 'Необычайно заботливые, общительные и популярные люди, всегда готовые помочь.',
      ur: 'غیر معمولی طور پر خیال رکھنے والے، ملنسار اور مقبول لوگ، جو ہمیشہ مدد کے لیے تیار رہتے ہیں۔'
    },
    image_color: '#4298b4',
    traits: []
  },
  'ISTP': {
    type: 'ISTP',
    title: { 
      zh: '鉴赏家', en: 'Virtuoso', es: 'Virtuoso', fr: 'Virtuose', hi: 'कलाप्रवीण व्यक्ति', de: 'Virtuose', 
      ja: '巨匠', it: 'Virtuoso', pt: 'Virtuoso', vi: 'Nhà kỹ nghệ', th: 'ผู้เชี่ยวชาญ', ar: 'الفنان المبدع', 
      tl: 'Virtuoso', bn: 'ভার্চুওসো', ru: 'Виртуоз', ur: 'فنکار' 
    },
    description: { 
      zh: '大胆而实际的实验家，精通各类工具。', 
      en: 'Bold and practical experimenters, masters of all kinds of tools.',
      es: 'Experimentadores audaces y prácticos, maestros de todo tipo de herramientas.',
      fr: 'Expérimentateurs audacieux et pratiques, maîtres de toutes sortes d\'outils.',
      hi: 'साहसी और व्यावहारिक प्रयोगकर्ता, सभी प्रकार के उपकरणों के स्वामी।',
      de: 'Kühne und praktische Experimentatoren, Meister aller Arten von Werkzeugen.',
      ja: 'あらゆる種類の道具を使いこなす、大胆で実用的な実験者。',
      it: 'Sperimentatori audaci e pratici, maestri di ogni tipo di strumento.',
      pt: 'Experimentadores ousados e práticos, mestres de todos os tipos de ferramentas.',
      vi: 'Những nhà thử nghiệm táo bạo và thực tế, bậc thầy của mọi loại công cụ.',
      th: 'นักทดลองที่กล้าหาญและปฏิบัติจริง เป็นเจ้าแห่งเครื่องมือทุกประเภท',
      ar: 'مجربون جريئون وعمليون ، بارعون في جميع أنواع الأدوات.',
      tl: 'Matapang at praktikal na mga eksperimento, master ng lahat ng uri ng tool.',
      bn: 'সাহসী এবং ব্যবহারিক পরীক্ষক, সব ধরণের সরঞ্জামের মাস্টার।',
      ru: 'Смелые и практичные экспериментаторы, мастера всевозможных инструментов.',
      ur: 'نڈر اور عملی تجربہ کار، ہر قسم کے اوزاروں کے ماہر۔'
    },
    image_color: '#e4ae3a',
    traits: []
  },
  'ISFP': {
    type: 'ISFP',
    title: { 
      zh: '探险家', en: 'Adventurer', es: 'Aventurero', fr: 'Aventurier', hi: 'साहसी', de: 'Abenteurer', 
      ja: '冒険家', it: 'Avventuriero', pt: 'Aventureiro', vi: 'Người nghệ sĩ', th: 'นักผจญภัย', ar: 'المغامر', 
      tl: 'Adventurer', bn: 'অভিযাত্রী', ru: 'Артист', ur: 'مہم جو' 
    },
    description: { 
      zh: '灵活、有魅力的艺术家，时刻准备着探索和体验新事物。', 
      en: 'Flexible and charming artists, always ready to explore and experience something new.',
      es: 'Artistas flexibles y encantadores, siempre listos para explorar y experimentar algo nuevo.',
      fr: 'Des artistes flexibles et charmants, toujours prêts à explorer et à vivre de nouvelles expériences.',
      hi: 'लचीले और आकर्षक कलाकार, कुछ नया तलाशने और अनुभव करने के लिए हमेशा तैयार।',
      de: 'Flexible und charmante Künstler, die immer bereit sind, etwas Neues zu erforschen und zu erleben.',
      ja: '常に新しいことを探索し、体験する準備ができている、柔軟で魅力的な芸術家。',
      it: 'Artisti flessibili e affascinanti, sempre pronti a esplorare e sperimentare qualcosa di nuovo.',
      pt: 'Artistas flexíveis e charmosos, sempre prontos para explorar e vivenciar algo novo.',
      vi: 'Những nghệ sĩ linh hoạt và quyến rũ, luôn sẵn sàng khám phá và trải nghiệm điều gì đó mới mẻ.',
      th: 'ศิลปินที่มีความยืดหยุ่นและมีเสน่ห์ พร้อมเสมอที่จะสำรวจและสัมผัสสิ่งใหม่ๆ',
      ar: 'فنانون مرنون وساحرون ، مستعدون دائمًا لاستكشاف وتجربة شيء جديد.',
      tl: 'Flexible at kaakit-akit na mga artista, laging handang mag-explore at makaranas ng bago.',
      bn: 'নমনীয় এবং কমনীয় শিল্পী, সর্বদা নতুন কিছু অন্বেষণ এবং অনুভব করতে প্রস্তুত।',
      ru: 'Гибкие и обаятельные артисты, всегда готовые исследовать и пробовать что-то новое.',
      ur: 'لچکدار اور دلکش فنکار، جو کچھ نیا تلاش کرنے اور تجربہ کرنے کے لیے ہمیشہ تیار رہتے ہیں۔'
    },
    image_color: '#e4ae3a',
    traits: []
  },
  'ESTP': {
    type: 'ESTP',
    title: { 
      zh: '企业家', en: 'Entrepreneur', es: 'Emprendedor', fr: 'Entrepreneur', hi: 'उद्यमी', de: 'Unternehmer', 
      ja: '起業家', it: 'Imprenditore', pt: 'Empreendedor', vi: 'Người thực thi', th: 'ผู้ประกอบการ', ar: 'رائد أعمال', 
      tl: 'Entrepreneur', bn: 'উদ্যোক্তা', ru: 'Делец', ur: 'کاروباری شخصیت' 
    },
    description: { 
      zh: '聪明、精力充沛且善于感知的观察者，真正享受在刀尖上行走。', 
      en: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
      es: 'Personas inteligentes, enérgicas y muy perceptivas, que disfrutan de verdad viviendo al límite.',
      fr: 'Des personnes intelligentes, énergiques et très perspicaces, qui aiment vraiment vivre sur le fil du rasoir.',
      hi: 'स्मार्ट, ऊर्जावान और बहुत ही समझदार लोग, जो वास्तव में किनारे पर रहने का आनंद लेते हैं।',
      de: 'Kluge, energische und sehr wahrnehmungsstarke Menschen, die es wirklich genießen, am Limit zu leben.',
      ja: '賢く、エネルギッシュで、非常に洞察力のある人々。スリル満点の生活を心から楽しんでいる。',
      it: 'Persone intelligenti, energiche e molto percettive, che amano davvero vivere al limite.',
      pt: 'Pessoas inteligentes, enérgicas e muito percetivas, que gostam verdadeiramente de viver no limite.',
      vi: 'Những người thông minh, năng động và rất nhạy bén, những người thực sự thích sống bên lề.',
      th: 'คนที่ฉลาด กระฉับกระเฉง และมีความรับรู้ไว ซึ่งสนุกกับการใช้ชีวิตบนความเสี่ยงอย่างแท้จริง',
      ar: 'أشخاص أذكياء ونشطون وسريعو الإدراك ، يستمتعون حقًا بالعيش على الحافة.',
      tl: 'Matalino, masigla at napaka-perceptive na mga tao, na tunay na nag-e-enjoy sa pamumuhay sa limitasyon.',
      bn: 'স্মার্ট, উদ্যমী এবং খুব বুদ্ধিমান মানুষ, যারা সত্যিই প্রান্তে বসবাস করতে পছন্দ করে।',
      ru: 'Умные, энергичные и очень проницательные люди, которым искренне нравится жить на грани.',
      ur: 'ہوشیار، توانا اور بہت ادراک رکھنے والے لوگ، جو واقعی خطرے میں رہنے کا لطف اٹھاتے ہیں۔'
    },
    image_color: '#e4ae3a',
    traits: []
  },
  'ESFP': {
    type: 'ESFP',
    title: { 
      zh: '表演者', en: 'Entertainer', es: 'Animador', fr: 'Animateur', hi: 'मनोरंजन करने वाला', de: 'Entertainer', 
      ja: 'エンターテイナー', it: 'Intrattenitore', pt: 'Animador', vi: 'Người trình diễn', th: 'ผู้มอบความบันเทิง', ar: 'المسلي', 
      tl: 'Entertainer', bn: 'বিনোদনকারী', ru: 'Развлекатель', ur: 'فنکار' 
    },
    description: { 
      zh: '自发的、精力充沛而热情的表演者——生活在他们周围永不枯燥。', 
      en: 'Spontaneous, energetic and enthusiastic people – life is never boring around them.',
      es: 'Personas espontáneas, enérgicas y entusiastas: la vida nunca es aburrida a su alrededor.',
      fr: 'Des personnes spontanées, énergiques et enthousiastes - on ne s\'ennuie jamais avec elles.',
      hi: 'सहज, ऊर्जावान और उत्साही लोग - उनके आसपास जीवन कभी उबाऊ नहीं होता।',
      de: 'Spontane, energische und begeisterungsfähige Menschen – in ihrer Nähe wird es nie langweilig.',
      ja: '自発的でエネルギッシュ、そして熱狂的な人々。彼らの周りでは人生が決して退屈することはない。',
      it: 'Persone spontanee, energiche ed entusiaste: la vita non è mai noiosa intorno a loro.',
      pt: 'Pessoas espontâneas, enérgicas e entusiastas – a vida nunca é ab 제 around them.',
      vi: 'Những người tự phát, năng động và nhiệt tình – cuộc sống không bao giờ nhàm chán khi ở bên họ.',
      th: 'คนที่กระฉับกระเฉงและกระตือรือร้น – ชีวิตไม่เคยน่าเบื่อเมื่ออยู่ใกล้พวกเขา',
      ar: 'أشخاص عفويون ونشطون ومتحمسون - الحياة ليست مملة أبدًا من حولهم.',
      tl: 'Spontaneous, masigla at masigasig na mga tao – hindi kailanman nakakabagot ang buhay sa paligid nila.',
      bn: 'স্বতঃস্ফূর্ত, উদ্যমী এবং উত্সাহী মানুষ - তাদের আশেপাশে জীবন কখনই বিরক্তিকর নয়।',
      ru: 'Спонтанные, энергичные и полные энтузиазма люди — рядом с ними никогда не бывает скучно.',
      ur: 'بے ساختہ، توانا اور پرجوش لوگ - ان کے آس پاس زندگی کبھی بورنگ نہیں ہوتی۔'
    },
    image_color: '#e4ae3a',
    traits: []
  },
};
