//결제(아임포트)
function requestPay () {
  IMP.init('imp03894674');
  IMP.request_pay({
    pg: 'inicis',
    pay_method: 'card',
    merchant_uid: 'merchant_' + new Date().getTime(),
    name: '주문명: 결제테스트',
    amount: total,
    buyer_email: 'iamport@siot.do',
    buyer_name: '구매자 이름',
    buyer_tel: '010-0000-0000',
    buyer_addr: '부산',
    buyer_postcode: '123-456',
    m_redirect_url: 'https://www.yourdomain.com/payments/complete',
  }, function (rsp) {
    console.log(rsp);
    if (rsp.success) {
      var msg = '결제가 완료되었습니다.';
      msg += '고유ID: ' + rsp.imp_uid;
      msg += '상점 거래ID: ' + rsp.merchant_uid;
      msg += '결제 금액: ' + rsp.paid_amount;
      msg += '카드 승인번호: ' + rsp.apply_num;
    } else {
      var msg = '결제에 실패했습니다.';
      msg += '에러내용: ' + rsp.error_msg;
    }
    alert(msg);
  });
}