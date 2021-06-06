
// 格式化日期的工具库,新增了格式化星期
const toInt = Symbol('toInt');
const toDate = Symbol('toDate');

class FormatDate extends Date {

    // 让新类继承于Date类
    constructor(date) {
        super(...arguments);
        // ISO下时间格式只认识/
        this.date = date || new Date();
    }

    // 私有方法: 转换整数
    [toInt]() {
        return parseInt(this.date);
    }

    // 私有方法: 更改日期格式
    [toDate]() {
        let dateStr = this.date;

        if (dateStr instanceof Date) return dateStr;

        if (!isNaN(dateStr) || /^\d+$/.test(dateStr)) {
            return new Date(this[toInt](dateStr));
        }

        dateStr = (dateStr || '')
            .trim()
            .replace(/\.\d+/, '')
            .replace(/-/, '/')
            .replace(/-/, '/')
            .replace(/(\d)T(\d)/, '$1 $2')
            .replace(/Z/, 'UTC')
            .replace(/([+-]\d\d):?(\d\d)/, '$1$2');

        return new Date(dateStr);
    }

    // 格式化日期为指定格式
    formatDate(fmt) {
        const date = this[toDate](this.date);

        if (!date) return;
        const o = {
            'M+': date.getMonth() + 1, // 月
            'd+': date.getDate(), // 日
            'h+': date.getHours(), // 时
            'm+': date.getMinutes(), // 分
            's+': date.getSeconds(), // 秒
            'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
            S: date.getMilliseconds() // 毫秒
        };

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                (`${date.getFullYear()}`).substr(4 - RegExp.$1.length)
            );
        }

        Object.keys(o).forEach(k => {
            if (new RegExp(`(${k})`).test(fmt)) {
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1 ? o[k]
                        : (`00${o[k]}`).substr((`${o[k]}`).length)
                );
            }
        });

        return fmt;
    }

    // 计算星期的函数
    getSunday(lang = 'en', format = 'MMM') {
        const weekEnArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            weekChArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            weekChSArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        // 中文星期
        if (lang === 'ch') {
            if (format === 'MMM') return weekChArr[new Date(this.date).getDay()];
            if (format === 'MM') return weekChSArr[new Date(this.date).getDay()];
        } else {
            return weekEnArr[new Date(this.date).getDay()];
        }
    }

    // 获取当天的日期信息 年月日 星期
    getTodayDate(fmt, lang = 'en') {
        return `${this.formatDate(fmt)} ${this.getSunday(lang)}`;
    }

    // 判断是否是前天
    isBeforeYesterday() {
        const nowDay = new Date().getTime();
        const beforeYesterday = new Date(nowDay - (86400000 * 2));
        const testDay = new Date(this.date);
        // 定义好前天之后进行年月日的比较
        return (testDay.getFullYear() === beforeYesterday.getFullYear())
        && (testDay.getMonth() === beforeYesterday.getMonth())
        && (testDay.getDate() === beforeYesterday.getDate());
    }

    // 判断是否是昨天
    isYesterday() {
        const nowDay = new Date().getTime();
        const yesterDay = new Date(nowDay - 86400000);
        const testDay = new Date(this.date);
        // 定义好昨天之后进行年月日的比较
        return (testDay.getFullYear() === yesterDay.getFullYear())
            && (testDay.getMonth() === yesterDay.getMonth())
            && (testDay.getDate() === yesterDay.getDate());
    }

    // 判断是否是今天
    isToday() {
        const nowDay = new Date().getDate();
        const day = new Date(this.date).getDate();
        // 相差时间小于24小时,同时天数一致
        return Math.abs(new Date().getTime() - new Date(this.date).getTime()) < 86400000 && nowDay == day;
    }

    // 判断明天
    isTomorrow() {
        const nowDay = new Date().getTime();
        const tomorrow = new Date(nowDay + 86400000);
        const testDay = new Date(this.date);
        // 定义好昨天之后进行年月日的比较
        return (testDay.getFullYear() === tomorrow.getFullYear())
            && (testDay.getMonth() === tomorrow.getMonth())
            && (testDay.getDate() === tomorrow.getDate());
    }

    // 判断是否是今年
    isYear() {
        const nowYear = new Date().getFullYear();
        const testYear = new Date(this.date).getFullYear();
        return nowYear === testYear;
    }

    // 是否在进行中
    isInprogress() {
        return Date.now - new Date(this.date).getTime() >= 0;
    }

    // 输出: 今日/ 昨日/ 前天/ 以及 年月日
    formatToday(fmt = 'yyyy-MM-dd', options = {}) {
        const{
            beforeYesterday = true,
            yesterday = true,
            tomorrow = true,
            today = true,
        } = options;
        if (this.isBeforeYesterday() && beforeYesterday) return '前天';
        if (this.isYesterday() && yesterday) return '昨天';
        if (this.isTomorrow() && tomorrow) return '明天';
        if (this.isToday() && today) return '今天';
        return this.formatDate(fmt);
    }

    // 输出: 今日(时分) 不是今日(月日 时分) 不是今年(年月日)
    formateIMTime() {
        if (!this.isYear()) {
            return this.formatDate('yyyy年MM月dd日 hh:mm');
        } else if (this.isToday()) {
            return this.formatDate('hh:mm');
        } else {
            return this.formatDate('MM月dd日 hh:mm');
        }
    }

    // 日期是否相等
    static dateEqual(before, after) {
        before = new Date(before.replace(/-/g, '/'));
        after = new Date(after.replace(/-/g, '/'));
        if (before.getTime() - after.getTime() === 0) {
            return true;
        }
        return false;

    }
}

export default FormatDate;
