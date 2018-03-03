const { BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

module.exports = {
    ctx: null,
    init() {
        this.ctx = new BrowserWindow({
            show: false,
            width: 430,
            height: 430,
        })

        this.ctx.loadURL(url.format({
            pathname: path.join(`${__dirname}/../views`, 'preferences.html'),
            protocol: 'file:',
            slashes: true,
        }))

        return this.ctx
    },
}
