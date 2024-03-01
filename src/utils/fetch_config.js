export const fetch_config = {
    BASE_URL: "https://bank.gov.ua",
    RATE_PATH: "/NBU_Exchange/exchange_site?valcode=usd&sort=exchangedate&order=desc&json",
    EX_DEBET_PATH: "/NBUStatService/v1/statdirectory/grossextdebt?json",
  };

// https://bank.gov.ua/NBU_Exchange/exchange_site?start=20200101&end=20240217&
// https://bank.gov.ua/NBUStatService/v1/statdirectory/grossextdebt?start=20160301&end=20170601