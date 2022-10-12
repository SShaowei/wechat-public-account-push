/* eslint-disable */


const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb37c39f03b5e5911',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '1b35e92c2d5e233826709131108b0036',

  PROVINCE: '安徽',
  CITY: '马鞍山',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝陈佳琪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'og4Vg6Uh_Z6MiQHMvjlgoLK2GQY4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'J7-N1RIIpaD_9Mvu2E30JAZkxTdZ02WDMR99EqvsVtw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '11-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '猪', year: '2002', date: '07-07',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '09-15',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-10-27' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG
