export function delCountry(name) {
    var hosArray = {};
    switch (name) {
        case "莲都区":
            hosArray = {
                莲都区人民医院: "A0A4CFA411D436437F2B506BCEC075D7"
            };
            break;
        case "青田县":
            hosArray = {
                青田县人民医院: "DE19FF86818407BB46CE506ED6450A8C",
                青田县中医院: "47234002X33112111A2101"
            };
            break;
        case "缙云县":
            hosArray = {
                缙云县人民医院: "987825D206ACA1F3A7B1507438BDB05C",
                缙云县中医医院: "828FF3B08F605AC463D35074B086C8C1"
            };
            break;
        case "遂昌县":
            hosArray = {
                遂昌县中医院: "FA920CF4-0E0C-4330-AE95-519F0AA67D38",
                遂昌县人民医院: "E9413D7C138142E3708D5078DF39E149"
            };
            break;
        case "松阳县":
            hosArray = {
                松阳县人民医院: "D81AA5BDEF11BB0829B350797168C361",
                松阳县中医院: "E000A426DE00215D85035079EC240F9D"
            };
            break;
        case "云和县":
            hosArray = {
                云和县人民医院: "32B08D96342285602721507B47AEB973",
                云和县中医院: "AD8B6D91C27977D9C007507BC4400D33"
            };
            break;
        case "庆元县":
            hosArray = {
                庆元县人民医院: "6ADB650A0202453A5C4D507CD7E13D02",
                庆元县中医院: "69E73D9176FC26894C2F507D4E14C720"
            };
            break;
        case "景宁畲族自治县":
            hosArray = {
                景宁县人民医院: "0F845041D8886D4FD41D507DC7789BAB"
            };
            break;
        case "龙泉市":
            hosArray = {
                龙泉市人民医院: "2CE5E3A9C7F0A9036A1C506CE707D9F7",
                龙泉市中医院: "9E5D34DCAD3D8F000DB0506D90D6A0AC"
            };
            break;
    }
    return hosArray;
}