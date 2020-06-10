var addon = require('./index.js')

const vendorCode = [
  'RjcOneUbN1gf8vkXnbu51sJFrxrTVqFtcCDE2cZqw2016tVVlJr/nF8r7HcXyWWE8FnvmmxSNUGwIc5o',
  'OgFNf+gn4eoy2eRXhaKB2pQdJ2eo/XL63BHEXX1TTb7beN+L/efRYU0Iwvys2oQfnssMF1oRjlAxVDhV',
  '9EJIAV8VzWkXcL8eOdGfVQYw1h+4SvmiNdDQ2rPgr+xvjQKH8La4UfUJOcIzS5JDBhNIQ+5XTqRLZIZn',
  'YjPrq/U2eXDgerMAeHGtICccKDFnP+FGFUddwQ7KgXab7Msw0md7rhNLGizvTP4ebW0i8AmJodtylfH1',
  'THFKlIpDcBXW0GX+zGGO85mOfGQsjiMmGTjlDE7OSZolSAPhAaU0JRIZ1Gz/kZawXub9VAg6BAqsqCBn',
  '0mW1RgcJARsT7/cVxxrmoLX8/oJe5yldRKPaf47SG6neqqUsLgiAzibwzapS7MkteNxZGvI/7qiVG86E',
  'P8P4HxWbfDfTtdChRRN2rM69G+YrsL10UPluOZXttvHGC/RtfYqBSGJZpdHqXb/pvIk/m2U8kQ8abiSV',
  '054WOfkfYlFmc219DSTH9aMLEPHcNSSPztE+yhAGsnp7P/Gtnfx7lkiS2OCpogkM1RbEIVJyhLgtDwg+',
  'o336adPJkPld2xrrtYMUs9l++2faMQ7mMIusAGIqLqL9cllOtJBxJIKIHo8nLGGV7WQS78AocMgo23xQ',
  'D+6DgCyZxZdZK7QJQ9Kwe0bWYJ+P+h6qczxDpmVy+FB6W8KOdDd+8dAVU7cVYtpwjNoo8rlCxlxvC4tL',
  'shj9Hck9X/GwSzcIL0dOD8YD8ON6Nh5oelHt1scjDE5/VypnBzJaKStSyLd23bUNdkHoV1BBgqwOCbKE',
  'lJEgutgqLD6AeMsD9VA05dieQHYal7P0TwJabQcAz8PoO133ted5dKKhUHyekdg0Pn165uUctu0tmVZC',
  '5WQXAlCWxKgJw9gd1yWONA=='
].join('')

console.log(addon.check(vendorCode)) // 'world'
