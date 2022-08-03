import { useState } from "react";
import mockData from "./data";
import moment from "moment";

const useShowRows = () => {
  const [rows, setRows] = useState([]);
  const showRows = () => {
    const data = mockData.map((dt, index) => ({
      id: dt.PARTA_TRANSACTION.PARTA_PARTA_ID,
      affidavitNo: dt.PARTA_TRANSACTION.AFFIDAVITNO,
      policyNo: dt.PARTA_TRANSACTION.POLICYNO,
      insuredName: dt.PARTA_TRANSACTION.RISKINSUREDNAME,
      type: dt.PARTA_TRANSACTION.TRANSACTIONTYPE,
      premium: dt.PARTA_TRANSACTION.AMOUNT,
      inception:
        dt.PARTA_TRANSACTION.EFFECTIVEDATE === null
          ? null
          : moment(dt.PARTA_TRANSACTION.EFFECTIVEDATE).format("DD/MM/YYYY"),
      expiration: moment(dt.PARTA_TRANSACTION.EXPIRATIONDATE).format(
        "DD/MM/YYYY"
      ),
      batch: dt.PARTA_TRANSACTION.BATCHID,
      submitted:
        dt.PARTA_TRANSACTION.RECEIVEDATE === null
          ? "--/--/----"
          : moment(dt.PARTA_TRANSACTION.RECEIVEDATE).format("DD/MM/YYYY"),
      procState:
        dt.PARTA_TRANSACTION.PROCESSEDSTATE === ""
          ? "-"
          : dt.PARTA_TRANSACTION.PROCESSEDSTATE,
      company: {
        header: dt.PARTA_TRANSACTION.AFFIDAVITNO,
        company: dt.PARTA_TRANSACTION.COMPANY.map((company) => {
          return `${company.COMPANYNUMBER} - ${company.COMPANYNAME}`;
        }).join(","),
        coverage: dt.PARTA_TRANSACTION.COVERAGE,
      },
    }));

    setRows(data);
  };

  return { showRows, rows };
};

export { useShowRows };
