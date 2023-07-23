const Ziggy = {"url":"http:\/\/company.test","port":null,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.update":{"uri":"reset-password","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"user-profile-information.update":{"uri":"user\/profile-information","methods":["PUT"]},"user-password.update":{"uri":"user\/password","methods":["PUT"]},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"]},"password.confirm":{"uri":"user\/confirm-password","methods":["POST"]},"terms.show":{"uri":"terms-of-service","methods":["GET","HEAD"]},"policy.show":{"uri":"privacy-policy","methods":["GET","HEAD"]},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"]},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"]},"current-user-photo.destroy":{"uri":"user\/profile-photo","methods":["DELETE"]},"current-user.destroy":{"uri":"user","methods":["DELETE"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"landing.welcome":{"uri":"\/","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"deposit.index":{"uri":"deposit","methods":["GET","HEAD"]},"deposit.create":{"uri":"deposit","methods":["POST"]},"deposit.confirm":{"uri":"deposit\/confirm","methods":["POST"]},"deposit.finish":{"uri":"payment\/finish","methods":["GET","HEAD"]},"deposit.unfinish":{"uri":"payment\/unfinish","methods":["GET","HEAD"]},"deposit.error":{"uri":"payment\/error","methods":["GET","HEAD"]},"history.index":{"uri":"history","methods":["GET","HEAD"]},"history.create":{"uri":"history\/create","methods":["GET","HEAD"]},"history.store":{"uri":"history","methods":["POST"]},"history.show":{"uri":"history\/{history}","methods":["GET","HEAD"]},"history.edit":{"uri":"history\/{history}\/edit","methods":["GET","HEAD"]},"history.update":{"uri":"history\/{history}","methods":["PUT","PATCH"]},"history.destroy":{"uri":"history\/{history}","methods":["DELETE"]},"profile.index":{"uri":"profile","methods":["GET","HEAD"]},"product.topup":{"uri":"product\/topup","methods":["POST"]},"product.pulsa":{"uri":"product\/pulsa","methods":["GET","HEAD"]},"product.games":{"uri":"product\/games","methods":["GET","HEAD"]},"product.gamePubgm":{"uri":"product\/game\/pubgm","methods":["GET","HEAD"]},"information.index":{"uri":"information","methods":["GET","HEAD"]},"information.create":{"uri":"information\/create","methods":["GET","HEAD"]},"information.store":{"uri":"information","methods":["POST"]},"information.show":{"uri":"information\/{information}","methods":["GET","HEAD"],"bindings":{"information":"id"}},"information.edit":{"uri":"information\/{information}\/edit","methods":["GET","HEAD"],"bindings":{"information":"id"}},"information.update":{"uri":"information\/{information}","methods":["PUT","PATCH"],"bindings":{"information":"id"}},"information.destroy":{"uri":"information\/{information}","methods":["DELETE"],"bindings":{"information":"id"}},"user.index":{"uri":"user","methods":["GET","HEAD"]},"user.create":{"uri":"user\/create","methods":["GET","HEAD"]},"user.store":{"uri":"user","methods":["POST"]},"user.show":{"uri":"user\/{user}","methods":["GET","HEAD"],"bindings":{"user":"id"}},"user.edit":{"uri":"user\/{user}\/edit","methods":["GET","HEAD"]},"user.update":{"uri":"user\/{user}","methods":["PUT","PATCH"],"bindings":{"user":"id"}},"user.destroy":{"uri":"user\/{user}","methods":["DELETE"]},"user.passwordReset":{"uri":"users\/reset-password\/{user}","methods":["POST"],"bindings":{"user":"id"}},"setting.index":{"uri":"setting","methods":["GET","HEAD"]},"setting.create":{"uri":"setting\/create","methods":["GET","HEAD"]},"setting.store":{"uri":"setting","methods":["POST"]},"setting.show":{"uri":"setting\/{setting}","methods":["GET","HEAD"]},"setting.edit":{"uri":"setting\/{setting}\/edit","methods":["GET","HEAD"]},"setting.update":{"uri":"setting\/{setting}","methods":["PUT","PATCH"]},"setting.destroy":{"uri":"setting\/{setting}","methods":["DELETE"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
