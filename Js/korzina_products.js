if(!localStorage.getItem('ArrayProducts'))//Проверка наличия товаров в корзине
{
    let out = '<p class="space_null">В корзине нет товаров.</p>';
    document.write(out);
}
else//Если товары имеются выводим их
{
    let arr = JSON.parse(localStorage.getItem('ArrayProducts'));//Достаём массив из json
    for(let i = 0; i < arr.length; i++)
    {
        let out = `
            <div class="product">
                <img src="` + arr[i]['img'] + `" alt="product">
                <div>
                    <p class="pname">` + arr[i]['name'] + `</p>
                    <p class="pcost">Цена: ` + arr[i]['price'] + ` руб.</p>
                </div>
                <div class="right__block">
                <button class="yt" onclick="DeleteProduct(` + i + `);">Убрать товар</button>
                    <div class="r__r__block">
                    <button onclick="DecreaseProduct(` + i + `);">-</button>
                    <p>` + arr[i]['col'] + `шт.</p>
                    <button onclick="IncreaseProduct(` + i + `);">+</button>
                    </div>
                </div>
            </div>
        `;
        document.write(out);
    }
}