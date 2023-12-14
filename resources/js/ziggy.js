const Ziggy = {"url":"http:\/\/company.test","port":null,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.update":{"uri":"reset-password","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"verification.notice":{"uri":"email\/verify","methods":["GET","HEAD"]},"verification.verify":{"uri":"email\/verify\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"user-profile-information.update":{"uri":"user\/profile-information","methods":["PUT"]},"user-password.update":{"uri":"user\/password","methods":["PUT"]},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"]},"password.confirm":{"uri":"user\/confirm-password","methods":["POST"]},"terms.show":{"uri":"terms-of-service","methods":["GET","HEAD"]},"policy.show":{"uri":"privacy-policy","methods":["GET","HEAD"]},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"]},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"]},"current-user-photo.destroy":{"uri":"user\/profile-photo","methods":["DELETE"]},"current-user.destroy":{"uri":"user","methods":["DELETE"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"landing.welcome":{"uri":"\/","methods":["GET","HEAD"]},"landing.upgrade":{"uri":"premium","methods":["GET","HEAD"]},"transaction.print":{"uri":"print\/{transaction}","methods":["GET","HEAD"],"parameters":["transaction"]},"transaction.share":{"uri":"share\/{transaction}","methods":["GET","HEAD"],"parameters":["transaction"]},"login.otp":{"uri":"login-otp","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"otp.create":{"uri":"otp\/create","methods":["GET","HEAD"]},"otp.req":{"uri":"otp\/request","methods":["GET","HEAD"]},"otp.acc":{"uri":"otp\/acc","methods":["POST"]},"deposit.index":{"uri":"deposit","methods":["GET","HEAD"]},"deposit.method":{"uri":"deposit\/method","methods":["POST"]},"deposit.create":{"uri":"deposit","methods":["POST"]},"deposit.confirm":{"uri":"deposit\/confirm","methods":["PUT"]},"money-transfer.index":{"uri":"money-transfer","methods":["GET","HEAD"]},"money-transfer.amount":{"uri":"money-transfer\/amount","methods":["POST"]},"money-transfer.confirm":{"uri":"money-transfer\/confirm","methods":["POST"]},"money-transfer.test":{"uri":"money-transfer\/test","methods":["GET","HEAD"]},"payment.success":{"uri":"payment\/success","methods":["GET","HEAD"]},"history.index":{"uri":"history","methods":["GET","HEAD"]},"history.create":{"uri":"history\/create","methods":["GET","HEAD"]},"history.store":{"uri":"history","methods":["POST"]},"history.show":{"uri":"history\/{history}","methods":["GET","HEAD"],"parameters":["history"]},"history.edit":{"uri":"history\/{history}\/edit","methods":["GET","HEAD"],"parameters":["history"]},"history.update":{"uri":"history\/{history}","methods":["PUT","PATCH"],"parameters":["history"]},"history.destroy":{"uri":"history\/{history}","methods":["DELETE"],"parameters":["history"]},"product.topup":{"uri":"product\/topup","methods":["POST"]},"product.topup.pasca":{"uri":"product\/topup-pasca","methods":["POST"]},"product.status":{"uri":"product\/status","methods":["GET","HEAD"]},"pulsa.index":{"uri":"product\/pulsa","methods":["GET","HEAD"]},"pln.index":{"uri":"product\/pln","methods":["GET","HEAD"]},"pln.prepaid.index":{"uri":"product\/pln-prepaid","methods":["GET","HEAD"]},"pln.prepaid.inquiry":{"uri":"product\/pln-prepaid-inquiry","methods":["GET","HEAD"]},"pln.postpaid.index":{"uri":"product\/pln-postpaid","methods":["GET","HEAD"]},"pln.postpaid.inquiry":{"uri":"product\/pln-postpaid-inquiry","methods":["GET","HEAD"]},"games.index":{"uri":"product\/games","methods":["GET","HEAD"]},"games.show":{"uri":"product\/games\/{product}","methods":["GET","HEAD"],"parameters":["product"]},"emoney.index":{"uri":"product\/emoney","methods":["GET","HEAD"]},"emoney.show":{"uri":"product\/emoney\/{product}","methods":["GET","HEAD"],"parameters":["product"]},"etoll.index":{"uri":"product\/etoll","methods":["GET","HEAD"]},"etoll.show":{"uri":"product\/etoll\/{product}","methods":["GET","HEAD"],"parameters":["product"]},"voucher.index":{"uri":"product\/voucher","methods":["GET","HEAD"]},"voucher.show":{"uri":"product\/voucher\/{product}","methods":["GET","HEAD"],"parameters":["product"]},"television.index":{"uri":"product\/television","methods":["GET","HEAD"]},"television.show":{"uri":"product\/television\/{product}","methods":["GET","HEAD"],"parameters":["product"]},"pasca.internet.index":{"uri":"product\/internet","methods":["GET","HEAD"]},"pasca.bpjs.index":{"uri":"product\/bpjs","methods":["GET","HEAD"]},"pasca.multifinance.index":{"uri":"product\/multifinance","methods":["GET","HEAD"]},"pasca.index":{"uri":"product\/pasca\/{sku}","methods":["GET","HEAD"],"parameters":["sku"]},"pasca.inquiry":{"uri":"product\/pasca\/inquiry","methods":["POST"]},"information.index":{"uri":"information","methods":["GET","HEAD"]},"information.create":{"uri":"information\/create","methods":["GET","HEAD"]},"information.store":{"uri":"information","methods":["POST"]},"information.show":{"uri":"information\/{information}","methods":["GET","HEAD"],"parameters":["information"],"bindings":{"information":"id"}},"information.edit":{"uri":"information\/{information}\/edit","methods":["GET","HEAD"],"parameters":["information"],"bindings":{"information":"id"}},"information.update":{"uri":"information\/{information}","methods":["PUT","PATCH"],"parameters":["information"],"bindings":{"information":"id"}},"information.destroy":{"uri":"information\/{information}","methods":["DELETE"],"parameters":["information"],"bindings":{"information":"id"}},"carousel.index":{"uri":"carousel","methods":["GET","HEAD"]},"carousel.create":{"uri":"carousel\/create","methods":["GET","HEAD"]},"carousel.store":{"uri":"carousel","methods":["POST"]},"carousel.show":{"uri":"carousel\/{carousel}","methods":["GET","HEAD"],"parameters":["carousel"],"bindings":{"carousel":"id"}},"carousel.edit":{"uri":"carousel\/{carousel}\/edit","methods":["GET","HEAD"],"parameters":["carousel"],"bindings":{"carousel":"id"}},"carousel.update":{"uri":"carousel\/{carousel}","methods":["PUT","PATCH"],"parameters":["carousel"],"bindings":{"carousel":"id"}},"carousel.destroy":{"uri":"carousel\/{carousel}","methods":["DELETE"],"parameters":["carousel"],"bindings":{"carousel":"id"}},"transaction.index":{"uri":"transaction","methods":["GET","HEAD"]},"transaction.create":{"uri":"transaction\/create","methods":["GET","HEAD"]},"transaction.store":{"uri":"transaction","methods":["POST"]},"transaction.show":{"uri":"transaction\/{transaction}","methods":["GET","HEAD"],"parameters":["transaction"]},"transaction.edit":{"uri":"transaction\/{transaction}\/edit","methods":["GET","HEAD"],"parameters":["transaction"]},"transaction.update":{"uri":"transaction\/{transaction}","methods":["PUT","PATCH"],"parameters":["transaction"],"bindings":{"transaction":"id"}},"transaction.destroy":{"uri":"transaction\/{transaction}","methods":["DELETE"],"parameters":["transaction"]},"report.index":{"uri":"report","methods":["GET","HEAD"]},"report.create":{"uri":"report\/create","methods":["GET","HEAD"]},"report.store":{"uri":"report","methods":["POST"]},"report.show":{"uri":"report\/{report}","methods":["GET","HEAD"],"parameters":["report"]},"report.edit":{"uri":"report\/{report}\/edit","methods":["GET","HEAD"],"parameters":["report"]},"report.update":{"uri":"report\/{report}","methods":["PUT","PATCH"],"parameters":["report"]},"report.destroy":{"uri":"report\/{report}","methods":["DELETE"],"parameters":["report"]},"upgrade.index":{"uri":"upgrade","methods":["GET","HEAD"]},"upgrade.create":{"uri":"upgrade\/create","methods":["GET","HEAD"]},"upgrade.store":{"uri":"upgrade","methods":["POST"]},"upgrade.show":{"uri":"upgrade\/{upgrade}","methods":["GET","HEAD"],"parameters":["upgrade"],"bindings":{"upgrade":"id"}},"upgrade.edit":{"uri":"upgrade\/{upgrade}\/edit","methods":["GET","HEAD"],"parameters":["upgrade"],"bindings":{"upgrade":"id"}},"upgrade.update":{"uri":"upgrade\/{upgrade}","methods":["PUT","PATCH"],"parameters":["upgrade"],"bindings":{"upgrade":"id"}},"upgrade.destroy":{"uri":"upgrade\/{upgrade}","methods":["DELETE"],"parameters":["upgrade"],"bindings":{"upgrade":"id"}},"pin.index":{"uri":"pin","methods":["GET","HEAD"]},"pin.create":{"uri":"pin\/create","methods":["GET","HEAD"]},"pin.store":{"uri":"pin","methods":["POST"]},"pin.show":{"uri":"pin\/{pin}","methods":["GET","HEAD"],"parameters":["pin"]},"pin.edit":{"uri":"pin\/{pin}\/edit","methods":["GET","HEAD"],"parameters":["pin"]},"pin.update":{"uri":"pin\/{pin}","methods":["PUT","PATCH"],"parameters":["pin"]},"pin.destroy":{"uri":"pin\/{pin}","methods":["DELETE"],"parameters":["pin"]},"pin.moneyTransfer":{"uri":"pin-money-transfer","methods":["POST"]},"pin.topup":{"uri":"pin-topup","methods":["POST"]},"pin.topupPasca":{"uri":"pin-topup-pasca","methods":["POST"]},"pin.wrong":{"uri":"pin-wrong","methods":["GET","HEAD"]},"user.index":{"uri":"user","methods":["GET","HEAD"]},"user.create":{"uri":"user\/create","methods":["GET","HEAD"]},"user.store":{"uri":"user","methods":["POST"]},"user.show":{"uri":"user\/{user}","methods":["GET","HEAD"],"parameters":["user"],"bindings":{"user":"slug"}},"user.edit":{"uri":"user\/{user}\/edit","methods":["GET","HEAD"],"parameters":["user"]},"user.update":{"uri":"user\/{user}","methods":["PUT","PATCH"],"parameters":["user"],"bindings":{"user":"slug"}},"user.destroy":{"uri":"user\/{user}","methods":["DELETE"],"parameters":["user"]},"user.passwordReset":{"uri":"users\/reset-password\/{user}","methods":["POST"],"parameters":["user"],"bindings":{"user":"slug"}},"device.index":{"uri":"device","methods":["GET","HEAD"]},"device.store":{"uri":"device\/store","methods":["GET","HEAD"]},"pricing.index":{"uri":"pricing","methods":["GET","HEAD"]},"profile.index":{"uri":"profile","methods":["GET","HEAD"]},"setting.index":{"uri":"setting","methods":["GET","HEAD"]},"setting.create":{"uri":"setting\/create","methods":["GET","HEAD"]},"setting.store":{"uri":"setting","methods":["POST"]},"setting.show":{"uri":"setting\/{setting}","methods":["GET","HEAD"],"parameters":["setting"]},"setting.edit":{"uri":"setting\/{setting}\/edit","methods":["GET","HEAD"],"parameters":["setting"]},"setting.update":{"uri":"setting\/{setting}","methods":["PUT","PATCH"],"parameters":["setting"]},"setting.destroy":{"uri":"setting\/{setting}","methods":["DELETE"],"parameters":["setting"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
