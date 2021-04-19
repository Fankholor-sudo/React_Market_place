import  ItemBox from "./itemBox";

var http = require("https");

var options = {
    host: "lamp.ms.wits.ac.za",
    port: 443,
    path: "/home/s2172765/home.php",
    headers: { 'Content-Type': 'application/json' }
};

var req = http.request(options, function(res) {
    res.setEncoding("utf8");
    res.on("data", function (chunk) {
        var data = JSON.parse(chunk);
        //Items(data[1]["NAME"])
    });
});
req.on("error", function (e) {
    console.log(e.message);
});

req.end();
var ata = "my name is";
Items(ata)
function Items({data}){ 
    
    return (
    <div className="items">
        <ItemBox category="Books" itemName = "Everything I Never Told" orgPrice="186" image="./images/everything.jpg" discount="" rating="0(0)"/>
        <ItemBox category="Books" itemName="Rich Dad Poor Dad" orgPrice="159" image="./images/rich.jpeg" discount="" rating="0(0)"/>
        <ItemBox category="Books" itemName="Think Again" orgPrice="299" image="./images/think.webp" discount="" rating="0(0)"/>
        <ItemBox category="Books" itemName="The Alchemist" orgPrice="159" image="./images/alchemist.jpg" discount="" rating="0(0)"/>
    </div>
    )

    }  

function Items2(){    
        return(
                <div className="items">
                    <ItemBox category="Daily deals" itemName='Samsung Curved Monitor' orgPrice="3 599" image="./images/monitor.jpg" discount="" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="MacBook Air 13-inch" orgPrice="15 999" image="./images/laptop1.jpg" discount="" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Asus light 14-inch" orgPrice="5 749" image="./images/laptop3.jpg" discount="" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="ASUS ZenScreen Monitor" orgPrice="4 899" image="./images/tab.jpg" discount="" rating="0(0)"/>
                </div>
        );
    }

 function Items3(){    
        return(
                <div className="items">
                    <ItemBox category="Daily deals" itemName="Great Hall Sweater" orgPrice="349" image="./images/ff.png" discount="" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Navy Tracksuit" orgPrice="859" image="./images/dd.png" discount="" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Wits Sport Hoodie" orgPrice="521" image="./images/index.jpg" discount="" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Wits Black Hoodie" orgPrice="149" image="./images/jersey.jpg" discount="" rating="0(0)"/>
                </div>
        );
    }

function Items4(){    
        return(
                <div className="items">
                    <ItemBox category="Daily deals" itemName="PVP Game Console" orgPrice="270" image="./images/pvp.jpg" discount="" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Minecraft Bobble Head" orgPrice="72" image="./images/mine.jpg" discount="" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Xbox One S 1TB Console" orgPrice="7 999" image="./images/xbox.jpg" discount="" rating="0(0)" desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nisl pretium dignissim lobortis. Ut commodo scelerisque sapien, ut pharetra erat egestas non. Morbi pharetra elementum imperdiet. Suspendisse euismod, ligula id pellentesque tincidunt, dui justo suscipit purus, quis pulvinar elit massa at magna. Aliquam pretium quis ex id ornare. Sed eget aliquet orci. Vestibulum non massa lectus.

Aliquam mi velit, porta eget porta tincidunt, pulvinar ac sapien. Nunc sed massa eget lorem commodo feugiat. Nulla feugiat mollis orci, ac finibus risus ultrices ac. Pellentesque eu nisl ut nunc ornare facilisis sed et nisi. Mauris venenatis eros ac velit faucibus malesuada. Aliquam sodales malesuada porttitor. Sed tincidunt eget risus in sagittis. Donec at velit lorem.

Aliquam aliquam in nisi ut porttitor. In hac habitasse platea dictumst. Pellentesque feugiat mi turpis, at mattis tellus sagittis eget. Mauris posuere, diam eu ultrices aliquam, lectus nulla malesuada elit, vel posuere velit nulla et est. Quisque sed volutpat nulla. Maecenas suscipit rutrum ligula, at posuere ex vestibulum et. Donec laoreet faucibus ipsum quis egestas. Proin non est in risus viverra porttitor. Duis ornare mauris nibh, in scelerisque velit maximus ut. "/>
                    <ItemBox category="Daily deals" itemName="Hitman 3 XB1" orgPrice="1 309" image="./images/hitman.png" discount="" rating="0(0)" desc="Apples thinnest and lightest notebook, the MacBook Air gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with a 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fan-less design and the longest battery life everup to 18 hours 1. Still perfectly portable. MacBook Air is now a lot more powerful.

This MacBook Air 13inch, 2018 Retina Edition features a 1,6GHz Intel Core 8GB, SSD 256GB
.
MPN: MRE82LL/A
.
Model Number: A1932
.
Type: Pre-Owned
.
Cosmetic Condition: CPO - Grade B- Device is in excellent condition. Keys A and E are faded on the keyboard.
.

    6-month warranty
. 7-Day Return Policy
. Accessories not included
. 20+ inspection done on all devices and is fully functional"/>
                </div>
        );
    }

export {Items, Items2, Items3, Items4};
