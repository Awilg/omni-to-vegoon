function walk(rootNode)
{
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;

    // Modify each text node's value
    while (node = walker.nextNode()) {
        handleText(node);
    }
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{
    // Fix some misspellings
    v = v.replace(/\b(V|v)egen(s)?\b/g, "$1egan$2");

    // Veganism
    v = v.replace(/\bVeganism\b/g, "Being kind to animals");
    v = v.replace(/\bveganism\b/g, "being kind to animals");

    //  Gendered Veganders
    v = v.replace(/\bVegan (M|m)(e|a)n('s)?\b/g, "Vegoon$3");
    v = v.replace(/\bvegan m(e|a)n('s)?\b/g, "Vegoon$2");
    v = v.replace(/\bVegan (B|b)oy('s|s(?:')?)?\b/g, "Veegoof$2");
    v = v.replace(/\bvegan boy('s|s(?:')?)?\b/g, "vegoof$1");
    v = v.replace(/\bVegan (G|g)uy('s|s(?:')?)?\b/g, "Veguy$2");
    v = v.replace(/\bvegan guy('s|s(?:')?)?\b/g, "veguy$1");
    v = v.replace(/\bVegan (W|w)om(e|a)n('s)?\b/g, "Vegoonette$3");
    v = v.replace(/\bvegan wom(e|a)n('s)?\b/g, "vegoonette$2");
    v = v.replace(/\bVegan (G|g)irl('s|s(?:')?)?\b/g, "Vegirl$2");
    v = v.replace(/\bvegan girl('s|s(?:')?)?\b/g, "vegirl$1");
    v = v.replace(/\bVegan (G|g)al('s|s(?:')?)?\b/g, "Vegal$2");
    v = v.replace(/\bvegan gal('s|s(?:')?)?\b/g, "vegal$1");

    // Commands + vegan
    v = v.replace(/\bGo (V|v)egan\b/g, "Be a good person");
    v = v.replace(/\bgo vegan\b/g, "be a good person");
    v = v.replace(/\bGoing vegan\b/g, "Being a good person");
    v = v.replace(/\bgoing vegan\b/g, "being a good person");
    v = v.replace(/\bEat vegan\b/g, "Eat without causing others harm");
    v = v.replace(/\beat vegan\b/g, "eat without causing others harm");
    v = v.replace(/\bgo vegan\b/g, "be a good person");
    v = v.replace(/\b(is|am|be|I'm|im|i'm|Be) (V|v)egan\b/g, "$1 a good person");
    v = v.replace(/\bI("|')M VEGAN\b/g, "I'M A GOOD PERSON");
    v = v.replace(/\bturn vegan\b/g, "become enlightened");

    // Definitions
    v = v.replace(/\bveg·an\b/g, "mor·al·ly su·pe·ri·or per·son");
    v = v.replace(/\bvēɡən\b/g, "môrəlē səˈpirēər pərs(ə)n");
    v = v.replace(/\bcar·ni·vore\b/g, "blood·mouth");
    v = v.replace(/\bkärnəˌvôr\b/g, "blədmouTH");
    v = v.replace(/\bveg·e·tar·i·an\b/g, "cheese·breath·er");
    v = v.replace(/\bvejəˈterēən\b/g, "CHēzˈbrēT͟Hər");

    // Types of Vegoofballs
    v = v.replace(/\bStrict vegan(?:(s)\b|(')s\b)?/g, "Low self-monitor2$1");
    v = v.replace(/\bstrict vegan(?:(s)\b|(')s\b)?/g, "low self-monitor$2$1");

    // Vegan diet/lifestyle
    v = v.replace(/\b(A|a) vegan diet(s)?\b/g, "$1n ethically consistent diet$2");
    v = v.replace(/\bVegan diet(s)?\b/g, "Ethically consistent diet$1");
    v = v.replace(/\bvegan diet(s)?\b/g, "ethically consistent diet$1");
    v = v.replace(/\bVegan lifestyle(s)?\b/g, "Morally and ethically consistent lifestyle$1");
    v = v.replace(/\bvegan lifestyle(s)?\b/g, "morally and ethically consistent lifestyle$1");
    v = v.replace(/\bstrict(ly)? vegan diet(s)?\b/g, "morally and ethically consistent diet$2");

    // Cheat Days
    v = v.replace(/\bCheat day(s)?\b/g, "Time$1 of weakness");
    v = v.replace(/\bcheat day(s)?\b/g, "time$1 of weakness");

    // meat
    v = v.replace(/\bMeat(s)?\b/g, "Dead Animal Flesh");
    v = v.replace(/\bmeat(s)?\b/g, "dead animal flesh");
    v = v.replace(/\bBeef\b/g, "Dead Cow");
    v = v.replace(/\bbeef\b/g, "dead cow");
    v = v.replace(/\bPork\b/g, "Dead Pig");
    v = v.replace(/\bPork (B|b)elly\b/g, "Dead Pig Stomach");
    v = v.replace(/\bpork belly\b/g, "dead pig stomach");
    v = v.replace(/\bpork\b/g, "dead pig");
    v = v.replace(/\bBacon\b/g, "Salt-cured Dead Pig");
    v = v.replace(/\bbacon\b/g, "salt-cured dead pig");
    v = v.replace(/\bHam\b/g, "Dead Pig Leg");
    v = v.replace(/\bham\b/g, "dead pig leg");
    v = v.replace(/\bSausage(s)?\b/g, "Dead Animal Mélange$1");
    v = v.replace(/\bsausage(s)?\b/g, "dead animal mélange$1");
    v = v.replace(/\bSalami(s)?\b/g, "Cured Dead Animal Mélange$1");
    v = v.replace(/\bsalami(s)?\b/g, "cured dead animal mélange$1");    
    v = v.replace(/\bPoultry\b/g, "Dead Bird");
    v = v.replace(/\bpoultry\b/g, "dead bird");  
    v = v.replace(/\bHogget\b/g, "Dead Sheep");
    v = v.replace(/\bhogget\b/g, "dead sheep");
    v = v.replace(/\bMutton\b/g, "Dead Sheep");
    v = v.replace(/\bmutton\b/g, "dead sheep");
    v = v.replace(/\bVenison\b/g, "Dead Deer");
    v = v.replace(/\bvenison\b/g, "dead deer");
    v = v.replace(/\bLamb (C|c)hop(s)?\b/g, "Dead sheep");
    v = v.replace(/\blamb chop(s)?\b/g, "dead sheep");
    v = v.replace(/\bAnimal (P|p)roduct(s)?\b/g, "Fruit$2 of Cruelty");
    v = v.replace(/\banimal product(s)?\b/g, "fruit$1 of cruelty");
    v = v.replace(/\bTurducken\b/g, "Dead, sodomized turkey");
    v = v.replace(/\bturducken\b/g, "dead, sodomized turkey");

    // Carnies
    v = v.replace(/\bMeat(-| )?(E|e)ater(s)?\b/g, "Omnivore$3");
    v = v.replace(/\bmeat(-| )?eater(s)?\b/g, "omnivore$2");
    v = v.replace(/\bCarnivore(s)?\b/g, "Bloodmouth$1");
    v = v.replace(/\bcarnivore(s)?\b/g, "bloodmouth$1");

    // Vegetarian

    // Honey
    v = v.replace(/\bHoney\b/g, "Product of Exploited and Non-Unionized Bee Labor");
    v = v.replace(/\bhoney\b/g, "product of exploited and non-unionized bee labor");

    // Milk
    v = v.replace(/\bDairy (F|f)arm?\b/g, "Cow Rape Factory");
    v = v.replace(/\bDairy\b/g, "Cow Titty-Juice");
    v = v.replace(/\bdairy\b/g, "cow titty-juice");
    
    // Protein

    // B12

    // Eggs
    v = v.replace(/\bEgg(s)?\b/g, "Prenatal Chicken$1");
    v = v.replace(/\beggs(s)?\b/g, "prenatal chicken$1");

    // Cheese

    // BYND

    // Arbys

    // Yulin Dog Meat Festival

    // Veganuary
    v = v.replace(/\bVeganuary\b/g, "The best time of the year");
    v = v.replace(/\bveganuary\b/g, "the best time of the year");

    // Stopped veganism
    v = v.replace(/\bI('|")m not vegan anymore\b/gi, "I stopped caring about animals and the environment");
    v = v.replace(/\bI('|")m no longer vegan\b/g, "the best time of the year");

    // Vegan
    v = v.replace(/\ba Vegan\b/g, "a Morally Superior Person");
    v = v.replace(/\ba vegan\b/g, "a morally superior person");
    v = v.replace(/\bVegan(?:(s)\b(')|s\b)/g, "Morally Superior People$2$1");
    v = v.replace(/\bvegan(?:(s)\b(')|s\b)/g, "morally superior people$2$1");
    v = v.replace(/\bVegan\b/g, "Moral Superiority");
    v = v.replace(/\bvegan\b/g, "moral superiority");
    return v;
}

// Returns true if a node should *not* be altered in any way
function isForbiddenNode(node) {
    return node.isContentEditable || // DraftJS and many others
    (node.parentNode && node.parentNode.isContentEditable) || // Special case for Gmail
    (node.tagName && (node.tagName.toLowerCase() == "textarea" || // Some catch-alls
                     node.tagName.toLowerCase() == "input"));
}

// The callback used for the document body and title observers
function observerCallback(mutations) {
    var i, node;

    mutations.forEach(function(mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            node = mutation.addedNodes[i];
            if (isForbiddenNode(node)) {
                // Should never operate on user-editable content
                continue;
            } else if (node.nodeType === 3) {
                // Replace the text for text nodes
                handleText(node);
            } else {
                // Otherwise, find text nodes within the given node and replace text
                walk(node);
            }
        }
    });
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    var docTitle = doc.getElementsByTagName('title')[0],
    observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
    bodyObserver, titleObserver;

    // Do the initial text replacements in the document body and title
    walk(doc.body);
    doc.title = replaceText(doc.title);

    // Observe the body so that we replace text in any added/modified nodes
    bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(doc.body, observerConfig);

    // Observe the title so we can handle any modifications there
    if (docTitle) {
        titleObserver = new MutationObserver(observerCallback);
        titleObserver.observe(docTitle, observerConfig);
    }
}
walkAndObserve(document);
