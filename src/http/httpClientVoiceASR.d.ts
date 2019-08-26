// Type definitions for httpClientVoiceASR.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * HttpClientVoice类
 * 百度语音接口调用封装
 * 参考文档：http://speech.baidu.com/docs/asr/57
 * 
 * @class
 * @extends HttpClient
 * @constructor
 */
declare interface HttpClientVoiceASR {
		
	/**
	 * 
	 * @return  
	 */
	new (): HttpClientVoiceASR;
		
	/**
	 * 
	 * @param requestInfo 
	 */
	postWithInfo(requestInfo : any): /* void */ any;
		
	/**
	 * 
	 * @param param 
	 * @return  
	 */
	createBody(param : any): string;
		
	/**
	 * 
	 * @param str 
	 * @return  
	 */
	genMd5(str : any): any;
}
declare var HttpClientVoiceASR: HttpClientVoiceASR;
