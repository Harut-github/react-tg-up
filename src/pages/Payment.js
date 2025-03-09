import { useState } from "react";
import Networks from "../components/Networks";

export default function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [activeIndex, setActiveIndex] = useState(null);

  const options = [
    { value: "option1", label: "Картой" },
    { value: "option2", label: "Robokassa" },
    { value: "option3", label: "Tinkoff Pay" },
    { value: "option4", label: "Sber Pay" },
    { value: "option5", label: "Youkassa" },
    { value: "option6", label: "Cryptomus" },
    { value: "option7", label: "USDT" },
    { value: "option8", label: "Bitcoin" },
    { value: "option9", label: "Litecoin" },
    { value: "option10", label: "Tron TRX" },
    { value: "option11", label: "Ю Money" },
  ];

  return (
    <section className="sec">
      <Networks />
      <div className="content__box">
        <div className="content__box-bg">
          <div className="payform">
            <div className="payform__title">
              <h2>Накрутка</h2>
            </div>

            <div className="payform__arg">
              <div className="payform__arg-box">
                <div className="payform__arg-title">Тип накрутки</div>
                <div className="payform__arg-items">
                  <div className="payform__arg-item">Боты</div>
                  <div className="payform__arg-item">Живые</div>
                </div>
              </div>
              <div className="payform__arg-box">
                <div className="payform__arg-title">Качество</div>
                <div className="payform__arg-items">
                  <div className="payform__arg-item">Низкое - 0,01р</div>
                  <div className="payform__arg-item">Среднее - 0,6р</div>
                  <div className="payform__arg-item">Высокое - 0,9р </div>
                </div>
              </div>
            </div>

            <div className="payform__inp">
              <div className="payform__inp-item">
                <span>Ссылка</span>
                <input type="text" placeholder="Укажите ссылку" />
              </div>
              <div className="payform__inp-item">
                <span>Количество в сутки</span>
                <input type="text" placeholder="Минимум 50 шт" />
              </div>
              <div className="payform__inp-item">
                <span>Продолжительность дней</span>
                <input type="text" placeholder="Максимум 10 дней" />
              </div>
            </div>

            <div className="payform__price">
              <div className="payform__price-box">
                <div className="payform__price-total">0 ₽</div>
                <p>Итоговая стоимость</p>
              </div>
              <button className="btn btn-active" onClick={() => setIsOpen(true)}>К оплате</button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="popup">
          <div className="content__box">
            <button className="popup__close" onClick={() => setIsOpen(false)}>X</button>
            <div className="content__box-bg">
              <div className="popup__title">
                <h2>Оплата</h2>
                <p>Способы оплаты</p>
              </div>
              <div className="popup__box">
                {options.map((option, index) => (
                  <label 
                    key={option.value} 
                    className={`popup__item ${activeIndex === index ? "popup__item-active" : ""}`} 
                    onClick={() => {
                      setSelectedOption(option.value);
                      setActiveIndex(index);
                    }}
                  >
                    <input
                      id={option.value}
                      type="radio"
                      name="radioGroup"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={() => {}}
                      className="hidden"
                    />
                    <label>{option.label}</label>
                  </label>
                ))}
              </div>
              
              <div className="popup__bottom">
                <div className="popup__code">
                  <p>Промокод - <span> 10% скидку</span> </p>
                  <input type="text" name="code" />
                </div>
                <button>К оплате - 900 ₽</button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
