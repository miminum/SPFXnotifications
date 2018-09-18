import { Settings } from '@e2/settings';

export default class GraphService {
    public mockDataPromise(): Promise<Array<{}>> {
        const MockData = [
            {
                "@odata.etag": "W/\"CQAAABYAAABa7mptVE4HQKBwx8c3fQt/AABz/VJX\"",
                "id": "AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MABGAAAAAABMBxLVaWnHRbJW6kQao8ObBwBa7mptVE4HQKBwx8c3fQt-AAAAAAEMAABa7mptVE4HQKBwx8c3fQt-AAB0IG2BAAA=",
                "createdDateTime": "2018-09-17T06:11:42Z",
                "lastModifiedDateTime": "2018-09-17T06:11:43Z",
                "changeKey": "CQAAABYAAABa7mptVE4HQKBwx8c3fQt/AABz/VJX",
                "categories": [],
                "receivedDateTime": "2018-09-17T06:11:43Z",
                "sentDateTime": "2018-09-17T06:11:34Z",
                "hasAttachments": false,
                "internetMessageId": "<GDE6LDL06W_5b9f459669d2f_18e7d3fc594ccb980553f8_sprut@zendesk.com>",
                "subject": "[Engage²] \"Support\" assignment: Twitter feed broken",
                "bodyPreview": "##- Please type your reply above this line -##\r\n\r\nThis ticket (#621) has been assigned to group 'Support', of which you are a member.\r\n\r\n\r\n\r\nRyan Lewis\r\n\r\nSep 17, 16:11 AEST\r\n\r\nThis is a follow-up to your previous request #565 \"RE: User profile updated: p",
                "importance": "normal",
                "parentFolderId": "AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MAAuAAAAAABMBxLVaWnHRbJW6kQao8ObAQBa7mptVE4HQKBwx8c3fQt-AAAAAAEMAAA=",
                "conversationId": "AAQkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MAAQAOJj_ybdVNtBsjEN57fYLAM=",
                "isDeliveryReceiptRequested": null,
                "isReadReceiptRequested": false,
                "isRead": false,
                "isDraft": false,
                "webLink": "https://outlook.office365.com/owa/?ItemID=AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MABGAAAAAABMBxLVaWnHRbJW6kQao8ObBwBa7mptVE4HQKBwx8c3fQt%2FAAAAAAEMAABa7mptVE4HQKBwx8c3fQt%2FAAB0IG2BAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
                "inferenceClassification": "other",
                "body": {
                    "contentType": "html",
                    "content": "<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=utf-8\">\r\n<style type=\"text/css\">\r\n<!--\r\ntable td\r\n\t{border-collapse:collapse}\r\nbody[dir=rtl] .directional_text_wrapper\r\n\t{direction:rtl;\r\n\tunicode-bidi:embed}\r\n-->\r\n</style>\r\n</head>\r\n<body style=\"width:100%!important; margin:0; padding:0\">\r\n<div style=\"padding:10px; line-height:18px; font-family:'Lucida Grande',Verdana,Arial,sans-serif; font-size:12px; color:#444444\">\r\n<div style=\"color:#b5b5b5\">##- Please type your reply above this line -##</div>\r\n<p>This ticket (<a target=\"_blank\" href=\"https://engagesq.zendesk.com/agent/tickets/621\">#621</a>) has been assigned to group 'Support', of which you are a member.</p>\r\n<p></p>\r\n<div style=\"margin-top:25px\">\r\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n<tbody>\r\n<tr>\r\n<td width=\"100%\" style=\"padding:15px 0; border-top:1px dotted #c5c5c5\">\r\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"table-layout:fixed\">\r\n<tbody>\r\n<tr>\r\n<td valign=\"top\" style=\"padding:0 15px 0 15px; width:40px\"><img width=\"40\" height=\"40\" alt=\"Ryan Lewis\" src=\"https://secure.gravatar.com/avatar/2648d87584d33ffab06a68ed379f90c4?size=40&amp;default=https%3A%2F%2Fassets.zendesk.com%2Fimages%2F2016%2Fdefault-avatar-80.png&amp;r=g\" style=\"height:auto; line-height:100%; outline:none; text-decoration:none; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px\">\r\n</td>\r\n<td width=\"100%\" valign=\"top\" style=\"padding:0; margin:0\">\r\n<p style=\"font-family:'Lucida Grande','Lucida Sans Unicode','Lucida Sans',Verdana,Tahoma,sans-serif; font-size:15px; line-height:18px; margin-bottom:0; margin-top:0; padding:0; color:#1b1d1e\">\r\n<strong>Ryan Lewis</strong> </p>\r\n<p style=\"font-family:'Lucida Grande','Lucida Sans Unicode','Lucida Sans',Verdana,Tahoma,sans-serif; font-size:13px; line-height:25px; margin-bottom:15px; margin-top:0; padding:0; color:#bbbbbb\">\r\nSep 17, 16:11 AEST </p>\r\n<div class=\"zd-comment\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\nThis is a follow-up to your previous request <a href=\"https://engagesq.zendesk.com/agent/tickets/565\" target=\"_blank\" rel=\"ticket\">\r\n#565</a> &quot;RE: User profile updated: p...&quot;</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\nHi guys,</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\n</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\nOur twitter feed is broken again on the home page, is anyone able to help fix it?</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\n</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\nThanks,</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\n</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\nRyan Lewis <br>\r\nSystem Administrator<br>\r\nQSR International Pty Ltd</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\n2nd Floor, 651 Doncaster Road Doncaster 3108 VIC Australia<br>\r\nT &#43;61 3 9840 4900 D &#43;61 3 9840 4946<br>\r\nS <a href=\"mailto:rlewis@qsr.com.au\" rel=\"noreferrer\">rlewis@qsr.com.au</a><br>\r\nE <a href=\"mailto:R.Lewis@qsrinternational.com\" rel=\"noreferrer\">R.Lewis@qsrinternational.com</a>\r\n</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\nqsrinternational.com</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\n</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\n-------------------------------</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\n</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\nDisclaimer<br>\r\nThis transmission may contain information which is confidential and privileged and intended only for the addressee. If you are not the addressee you may not use, disseminate or copy this information. If you have received this information in error please notify\r\n the sender immediately. Thank you.</p>\r\n<p dir=\"auto\" style=\"color:#2b2e2f; font-family:'Lucida Sans Unicode','Lucida Grande','Tahoma',Verdana,sans-serif; font-size:14px; line-height:22px; margin:15px 0\">\r\nQSR Privacy Policy (<a href=\"https://www.qsrinternational.com/privacy-policy\" target=\"_blank\" rel=\"nofollow noreferrer\">https://www.qsrinternational.com/privacy-policy</a>)</p>\r\n</div>\r\n<p style=\"line-height:22px; font-family:'Lucida Grande','Lucida Sans Unicode','Lucida Sans',Verdana,Tahoma,sans-serif; margin-top:15px; margin-bottom:15px; font-size:14px; color:#333333\">\r\nAttachment(s)<br>\r\n<a href=\"https://engagesq.zendesk.com/attachments/token/pi5GTZHTy4mRDiYSTzIGkOQ3U/?name=image001.png\">image001.png</a><br>\r\n</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</div>\r\n</div>\r\n<div style=\"padding:10px; line-height:18px; font-family:'Lucida Grande',Verdana,Arial,sans-serif; font-size:12px; color:#aaaaaa; margin:10px 0 14px 0; padding-top:10px; border-top:1px solid #eeeeee\">\r\n<p style=\"font-family:Helvetica,Arial,sans-serif; margin-bottom:15px; font-size:80%; color:gray\">\r\nYou are an agent. Add a comment by replying to this email or <strong><a href=\"https://engagesq.zendesk.com/agent/tickets/621\" target=\"_new\">view ticket in Zendesk Support</a></strong>.\r\n</p>\r\n<table cellpadding=\"1\" cellspacing=\"0\" border=\"0\">\r\n<tbody>\r\n<tr>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#333333; line-height:18px; text-align:right; padding-right:10px; font-family:&quot;Lucida Grande&quot;,&quot;Lucida Sans Unicode&quot;,&quot;Tahoma&quot;,Verdana,sans-serif\">\r\n<strong>Ticket #</strong></td>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#777; line-height:18px; font-family:'Lucida Grande','Lucida Sans Unicode','Tahoma',Verdana,sans-serif\">\r\n621</td>\r\n</tr>\r\n<tr>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#333333; line-height:18px; text-align:right; padding-right:10px; font-family:&quot;Lucida Grande&quot;,&quot;Lucida Sans Unicode&quot;,&quot;Tahoma&quot;,Verdana,sans-serif\">\r\n<strong>Status</strong></td>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#777; line-height:18px; font-family:'Lucida Grande','Lucida Sans Unicode','Tahoma',Verdana,sans-serif\">\r\nNew</td>\r\n</tr>\r\n<tr>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#333333; line-height:18px; text-align:right; padding-right:10px; font-family:&quot;Lucida Grande&quot;,&quot;Lucida Sans Unicode&quot;,&quot;Tahoma&quot;,Verdana,sans-serif\">\r\n<strong>Requester</strong></td>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#777; line-height:18px; font-family:'Lucida Grande','Lucida Sans Unicode','Tahoma',Verdana,sans-serif\">\r\nRyan Lewis </td>\r\n</tr>\r\n<tr>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#333333; line-height:18px; text-align:right; padding-right:10px; font-family:&quot;Lucida Grande&quot;,&quot;Lucida Sans Unicode&quot;,&quot;Tahoma&quot;,Verdana,sans-serif\">\r\n<strong>CCs</strong></td>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#777; line-height:18px; font-family:'Lucida Grande','Lucida Sans Unicode','Tahoma',Verdana,sans-serif\">\r\n-</td>\r\n</tr>\r\n<tr>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#333333; line-height:18px; text-align:right; padding-right:10px; font-family:&quot;Lucida Grande&quot;,&quot;Lucida Sans Unicode&quot;,&quot;Tahoma&quot;,Verdana,sans-serif\">\r\n<strong>Group</strong></td>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#777; line-height:18px; font-family:'Lucida Grande','Lucida Sans Unicode','Tahoma',Verdana,sans-serif\">\r\nSupport</td>\r\n</tr>\r\n<tr>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#333333; line-height:18px; text-align:right; padding-right:10px; font-family:&quot;Lucida Grande&quot;,&quot;Lucida Sans Unicode&quot;,&quot;Tahoma&quot;,Verdana,sans-serif\">\r\n<strong>Assignee</strong></td>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#777; line-height:18px; font-family:'Lucida Grande','Lucida Sans Unicode','Tahoma',Verdana,sans-serif\">\r\n-</td>\r\n</tr>\r\n<tr>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#333333; line-height:18px; text-align:right; padding-right:10px; font-family:&quot;Lucida Grande&quot;,&quot;Lucida Sans Unicode&quot;,&quot;Tahoma&quot;,Verdana,sans-serif\">\r\n<strong>Priority</strong></td>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#777; line-height:18px; font-family:'Lucida Grande','Lucida Sans Unicode','Tahoma',Verdana,sans-serif\">\r\n-</td>\r\n</tr>\r\n<tr>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#333333; line-height:18px; text-align:right; padding-right:10px; font-family:&quot;Lucida Grande&quot;,&quot;Lucida Sans Unicode&quot;,&quot;Tahoma&quot;,Verdana,sans-serif\">\r\n<strong>Type</strong></td>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#777; line-height:18px; font-family:'Lucida Grande','Lucida Sans Unicode','Tahoma',Verdana,sans-serif\">\r\nTicket</td>\r\n</tr>\r\n<tr>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#333333; line-height:18px; text-align:right; padding-right:10px; font-family:&quot;Lucida Grande&quot;,&quot;Lucida Sans Unicode&quot;,&quot;Tahoma&quot;,Verdana,sans-serif\">\r\n<strong>Channel</strong></td>\r\n<td valign=\"top\" style=\"vertical-align:top; font-size:12px; color:#777; line-height:18px; font-family:'Lucida Grande','Lucida Sans Unicode','Tahoma',Verdana,sans-serif\">\r\nBy Closed Ticket</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<p>&nbsp;</p>\r\nThis email is a service from Engage². Delivered by <a href=\"https://www.zendesk.com/product/tour/?utm_campaign=text&amp;utm_content=Engage%C2%B2&amp;utm_medium=poweredbyzendesk&amp;utm_source=email-notification\" target=\"_blank\" style=\"color:black\">\r\nZendesk</a> </div>\r\n<span style=\"color:#FFFFFF\">[GDE6LD-L06W]</span><span style=\"color:#FFFFFF\">Ticket-Id:621</span><span style=\"color:#FFFFFF\">Account-Subdomain:engagesq</span>\r\n<div itemscope=\"\" itemtype=\"http://schema.org/EmailMessage\" style=\"display:none\">\r\n<div itemprop=\"action\" itemscope=\"\" itemtype=\"http://schema.org/ViewAction\"><link itemprop=\"url\" href=\"https://engagesq.zendesk.com/agent/tickets/621\">\r\n<meta itemprop=\"name\" content=\"View ticket\">\r\n</div>\r\n</div>\r\n</body>\r\n</html>\r\n"
                },
                "sender": {
                    "emailAddress": {
                        "name": "Ryan Lewis (Engage²)",
                        "address": "support@engagesq.zendesk.com"
                    }
                },
                "from": {
                    "emailAddress": {
                        "name": "Ryan Lewis (Engage²)",
                        "address": "support@engagesq.zendesk.com"
                    }
                },
                "toRecipients": [
                    {
                        "emailAddress": {
                            "name": "James Di Blasi",
                            "address": "james.diblasi@wm360.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Support Australia",
                            "address": "supportau@wm360.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Robert Carrington | E²",
                            "address": "robert.carrington@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Ian Anderson | E²",
                            "address": "ian.anderson@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Stephen Monk | E²",
                            "address": "stephen.monk@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Thomas Lalor | E²",
                            "address": "thomas.lalor@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Evan Tse | E²",
                            "address": "evan.tse@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Mark Powney | E²",
                            "address": "mark.powney@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Bex Balmer | E²",
                            "address": "rebecca.balmer@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Daniel Huong | E²",
                            "address": "daniel.huong@engagesq.com"
                        }
                    }
                ],
                "ccRecipients": [],
                "bccRecipients": [],
                "replyTo": [
                    {
                        "emailAddress": {
                            "name": "Engage²",
                            "address": "support+idGDE6LD-L06W@engagesq.zendesk.com"
                        }
                    }
                ],
                "flag": {
                    "flagStatus": "notFlagged"
                }
            },
            {
                "@odata.type": "#microsoft.graph.eventMessage",
                "@odata.etag": "W/\"CwAAABYAAABa7mptVE4HQKBwx8c3fQt/AABz/VB7\"",
                "id": "AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MABGAAAAAABMBxLVaWnHRbJW6kQao8ObBwBa7mptVE4HQKBwx8c3fQt-AAAAAAEMAABa7mptVE4HQKBwx8c3fQt-AAB0IG1-AAA=",
                "createdDateTime": "2018-09-17T04:44:40Z",
                "lastModifiedDateTime": "2018-09-17T04:44:41Z",
                "changeKey": "CwAAABYAAABa7mptVE4HQKBwx8c3fQt/AABz/VB7",
                "categories": [],
                "receivedDateTime": "2018-09-17T04:44:41Z",
                "sentDateTime": "2018-09-17T04:44:39Z",
                "hasAttachments": false,
                "internetMessageId": "<ME1PR01MB04685114BDC63F1836DE98BCB71E0@ME1PR01MB0468.ausprd01.prod.outlook.com>",
                "subject": "Brown bag: Delivering ATO's intranet in 3 months",
                "bodyPreview": "Hey all,\r\n\r\nFollowing up from our little teaser last Friday, Thomas Lalor and I will be chatting about what we’ve learned delivering the ATO Intranet with tight timeframes and technical complexity. It would be great to see you all there, I’ve setup a team",
                "importance": "normal",
                "parentFolderId": "AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MAAuAAAAAABMBxLVaWnHRbJW6kQao8ObAQBa7mptVE4HQKBwx8c3fQt-AAAAAAEMAAA=",
                "conversationId": "AAQkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MAAQAM243o3lE89ArPXHjYWVnT0=",
                "isDeliveryReceiptRequested": null,
                "isReadReceiptRequested": false,
                "isRead": false,
                "isDraft": false,
                "webLink": "https://outlook.office365.com/owa/?ItemID=AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MABGAAAAAABMBxLVaWnHRbJW6kQao8ObBwBa7mptVE4HQKBwx8c3fQt%2FAAAAAAEMAABa7mptVE4HQKBwx8c3fQt%2FAAB0IG1%2FAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
                "inferenceClassification": "focused",
                "meetingMessageType": "meetingRequest",
                "body": {
                    "contentType": "html",
                    "content": "<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=Windows-1252\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\n@font-face\r\n\t{font-family:\"Segoe UI\"}\r\n@font-face\r\n\t{font-family:\"Segoe UI Semibold\"}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-AU\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">Hey all, </p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">Following up from our little teaser last Friday, Thomas Lalor and I will be chatting about what we’ve learned delivering the ATO Intranet with tight timeframes and technical complexity. It would be great to see you all there, I’ve setup\r\n a teams meeting for all interstaters and anyone WFH to join.</p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">Thanks, </p>\r\n<p class=\"MsoNormal\"><br>\r\nJames</p>\r\n<p class=\"MsoNormal\"><span style=\"color:gray\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"color:gray\">________________________________________________________________________________</span>\r\n</p>\r\n<div>\r\n<div style=\"margin-top:18.0pt; margin-bottom:7.5pt\">\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"><a href=\"https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTkzNWEyNzItZTJiZC00MDNlLWE3NzAtMDM3NmY5ODY4YjVl%40thread.skype/0?context=%7b%22Tid%22%3a%224623aa6f-4e58-4a9a-b765-ea2f8fae58d6%22%2c%22Oid%22%3a%22530411da-71b2-46ad-8814-4781f89f9601%22%7d\" target=\"_blank\"><span style=\"font-size:13.5pt; font-family:&quot;Segoe UI Semibold&quot;,sans-serif; color:#6264A7; text-decoration:none\">Join\r\n Microsoft Teams Meeting</span></a> </span></p>\r\n</div>\r\n<div>\r\n<div>\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"><a href=\"tel:&#43;61%202%208318%200090,,32128306# \" target=\"_blank\"><span style=\"font-size:10.5pt; color:#6264A7; text-decoration:none\">&#43;61 2 8318 0090</span></a>\r\n</span><span style=\"font-size:9.0pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">&nbsp; Australia, Sydney (Toll)\r\n</span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"></span></p>\r\n</div>\r\n</div>\r\n<div style=\"margin-top:7.5pt; margin-bottom:15.0pt\">\r\n<p class=\"MsoNormal\"><span style=\"font-size:9.0pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">Conference ID:\r\n</span><span style=\"font-size:10.5pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">321 283 06#\r\n</span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"></span></p>\r\n</div>\r\n<div style=\"margin-bottom:18.0pt\">\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"><a href=\"https://dialin.teams.microsoft.com/84e6b9a6-41f5-453b-b764-0ad984666118?id=32128306\" target=\"_blank\"><span style=\"font-size:9.0pt; color:#6264A7; text-decoration:none\">Local\r\n numbers</span></a> | <a href=\"https://mysettings.lync.com/pstnconferencing\" target=\"_blank\">\r\n<span style=\"font-size:9.0pt; color:#6264A7; text-decoration:none\">Reset PIN</span></a> |\r\n<a href=\"https://go.microsoft.com/fwlink/?linkid=857250\" target=\"_blank\"><span style=\"font-size:9.0pt; color:#6264A7; text-decoration:none\">Learn more about Teams</span></a>\r\n</span></p>\r\n</div>\r\n</div>\r\n<div>\r\n<p class=\"MsoNormal\"><span style=\"color:gray\">________________________________________________________________________________</span>\r\n</p>\r\n</div>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n<div id=\"a59ada49-a492-4f1d-ac57-74be3a4194fc\" style=\"display:inline-block\">\r\n<table cellspacing=\"0\" style=\"table-layout:fixed; width:50px; border:0 none black\">\r\n<tbody>\r\n<tr>\r\n<td style=\"height:18px; padding:0; border-width:0 0 1px 0; border-style:none none solid none; border-color:#EAEAEA\">\r\n&nbsp;</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<table cellspacing=\"0\" style=\"table-layout:fixed; width:90%; line-height:17px; border:0 none black\">\r\n<tbody>\r\n<tr>\r\n<td style=\"height:17px; padding:0; border:0 none black\">&nbsp;</td>\r\n</tr>\r\n<tr>\r\n<td style=\"padding:0; border:0 none black; color:#666666; font-size:12px; font-family:'Segoe UI','Segoe WP',sans-serif\">\r\nTo stop receiving messages from <a href=\"https://outlook.office365.com/owa/Engage@engagesq.com/groupsubscription.ashx?realm=engagesq.com&amp;source=EscalatedMessage&amp;action=conversations\" style=\"color:#0072C6; text-decoration:none; font-size:12px; font-family:'Segoe UI Semibold','Segoe WP Semibold','Segoe UI','Segoe WP',sans-serif\">\r\nEngage²</a> group, <a id=\"BD5134C6-8D33-4ABA-A0C4-08581FDF89DB\" href=\"https://outlook.office365.com/owa/Engage@engagesq.com/groupsubscription.ashx?realm=engagesq.com&amp;source=EscalatedMessage&amp;action=unsubscribe\" style=\"color:#0072C6; text-decoration:none; font-size:12px; font-family:'Segoe UI Semibold','Segoe WP Semibold','Segoe UI','Segoe WP',sans-serif\">\r\nstop following it</a>.</td>\r\n</tr>\r\n<tr>\r\n<td style=\"height:17px; padding:0; border:0 none black\">&nbsp;</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</div>\r\n</body>\r\n</html>\r\n"
                },
                "sender": {
                    "emailAddress": {
                        "name": "Stephen Monk | E²",
                        "address": "stephen.monk@engagesq.com"
                    }
                },
                "from": {
                    "emailAddress": {
                        "name": "Engage²",
                        "address": "Engage@engagesq.com"
                    }
                },
                "toRecipients": [
                    {
                        "emailAddress": {
                            "name": "James Di Blasi | E²",
                            "address": "james.diblasi@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Engage²",
                            "address": "Engage@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Stephen Monk | E²",
                            "address": "stephen.monk@engagesq.com"
                        }
                    }
                ],
                "ccRecipients": [],
                "bccRecipients": [],
                "replyTo": [],
                "flag": {
                    "flagStatus": "notFlagged"
                }
            },
            {
                "@odata.type": "#microsoft.graph.eventMessage",
                "@odata.etag": "W/\"CwAAABYAAABa7mptVE4HQKBwx8c3fQt/AABz/VB0\"",
                "id": "AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MABGAAAAAABMBxLVaWnHRbJW6kQao8ObBwBa7mptVE4HQKBwx8c3fQt-AAAAAAEMAABa7mptVE4HQKBwx8c3fQt-AAB0IG1_AAA=",
                "createdDateTime": "2018-09-17T04:44:38Z",
                "lastModifiedDateTime": "2018-09-17T04:44:40Z",
                "changeKey": "CwAAABYAAABa7mptVE4HQKBwx8c3fQt/AABz/VB0",
                "categories": [],
                "receivedDateTime": "2018-09-17T04:44:39Z",
                "sentDateTime": "2018-09-17T04:44:36Z",
                "hasAttachments": false,
                "internetMessageId": "<ME2PR01MB37157BB98030840C5EBC8E90E01E0@ME2PR01MB3715.ausprd01.prod.outlook.com>",
                "subject": "FW: Brown bag: Delivering ATO's intranet in 3 months",
                "bodyPreview": "-----Original Appointment-----\r\nFrom: James Di Blasi | E²\r\nSent: Friday, 14 September 2018 5:56 PM\r\nTo: James Di Blasi | E²; Engage²\r\nSubject: Brown bag: Delivering ATO's intranet in 3 months\r\nWhen: Friday, 21 September 2018 12:30 PM-1:15 PM (UTC+10:0",
                "importance": "normal",
                "parentFolderId": "AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MAAuAAAAAABMBxLVaWnHRbJW6kQao8ObAQBa7mptVE4HQKBwx8c3fQt-AAAAAAEMAAA=",
                "conversationId": "AAQkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MAAQAFSzPvZncU7ul_WARNCPI_w=",
                "isDeliveryReceiptRequested": false,
                "isReadReceiptRequested": false,
                "isRead": false,
                "isDraft": false,
                "webLink": "https://outlook.office365.com/owa/?ItemID=AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MABGAAAAAABMBxLVaWnHRbJW6kQao8ObBwBa7mptVE4HQKBwx8c3fQt%2FAAAAAAEMAABa7mptVE4HQKBwx8c3fQt%2FAAB0IG1%2BAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
                "inferenceClassification": "focused",
                "meetingMessageType": "meetingRequest",
                "body": {
                    "contentType": "html",
                    "content": "<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=iso-8859-1\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\n@font-face\r\n\t{font-family:\"Segoe UI\"}\r\n@font-face\r\n\t{font-family:\"Segoe UI Semibold\"}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\nspan.EmailStyle19\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-AU\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<div>\r\n<p class=\"MsoNormal\"><span lang=\"EN-US\" style=\"\">-----Original Appointment-----<br>\r\n<b>From:</b> James Di Blasi | E² <br>\r\n<b>Sent:</b> Friday, 14 September 2018 5:56 PM<br>\r\n<b>To:</b> James Di Blasi | E²; Engage²<br>\r\n<b>Subject:</b> Brown bag: Delivering ATO's intranet in 3 months<br>\r\n<b>When:</b> Friday, 21 September 2018 12:30 PM-1:15 PM (UTC&#43;10:00) Canberra, Melbourne, Sydney.<br>\r\n<b>Where:</b> Melbourne Office @ 'The Projector'</span></p>\r\n</div>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">Hey all, </p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">Following up from our little teaser last Friday, Thomas Lalor and I will be chatting about what we’ve learned delivering the ATO Intranet with tight timeframes and technical complexity. It would be great to see you all there, I’ve setup\r\n a teams meeting for all interstaters and anyone WFH to join.</p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">Thanks, </p>\r\n<p class=\"MsoNormal\"><br>\r\nJames</p>\r\n<p class=\"MsoNormal\"><span style=\"color:gray\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"color:gray\">________________________________________________________________________________</span>\r\n</p>\r\n<div>\r\n<div style=\"margin-top:18.0pt; margin-bottom:7.5pt\">\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"><a href=\"https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTkzNWEyNzItZTJiZC00MDNlLWE3NzAtMDM3NmY5ODY4YjVl%40thread.skype/0?context=%7b%22Tid%22%3a%224623aa6f-4e58-4a9a-b765-ea2f8fae58d6%22%2c%22Oid%22%3a%22530411da-71b2-46ad-8814-4781f89f9601%22%7d\" target=\"_blank\"><span style=\"font-size:13.5pt; font-family:&quot;Segoe UI Semibold&quot;,sans-serif; color:#6264A7; text-decoration:none\">Join\r\n Microsoft Teams Meeting</span></a> </span></p>\r\n</div>\r\n<div>\r\n<div>\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"><a href=\"tel:&#43;61%202%208318%200090,,32128306# \" target=\"_blank\"><span style=\"font-size:10.5pt; color:#6264A7; text-decoration:none\">&#43;61 2 8318 0090</span></a>\r\n</span><span style=\"font-size:9.0pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">&nbsp; Australia, Sydney (Toll)\r\n</span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"></span></p>\r\n</div>\r\n</div>\r\n<div style=\"margin-top:7.5pt; margin-bottom:15.0pt\">\r\n<p class=\"MsoNormal\"><span style=\"font-size:9.0pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">Conference ID:\r\n</span><span style=\"font-size:10.5pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">321 283 06#\r\n</span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"></span></p>\r\n</div>\r\n<div style=\"margin-bottom:18.0pt\">\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"><a href=\"https://dialin.teams.microsoft.com/84e6b9a6-41f5-453b-b764-0ad984666118?id=32128306\" target=\"_blank\"><span style=\"font-size:9.0pt; color:#6264A7; text-decoration:none\">Local\r\n numbers</span></a> | <a href=\"https://mysettings.lync.com/pstnconferencing\" target=\"_blank\">\r\n<span style=\"font-size:9.0pt; color:#6264A7; text-decoration:none\">Reset PIN</span></a> |\r\n<a href=\"https://go.microsoft.com/fwlink/?linkid=857250\" target=\"_blank\"><span style=\"font-size:9.0pt; color:#6264A7; text-decoration:none\">Learn more about Teams</span></a>\r\n</span></p>\r\n</div>\r\n</div>\r\n<div>\r\n<p class=\"MsoNormal\"><span style=\"color:gray\">________________________________________________________________________________</span>\r\n</p>\r\n</div>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n"
                },
                "sender": {
                    "emailAddress": {
                        "name": "Stephen Monk | E²",
                        "address": "stephen.monk@engagesq.com"
                    }
                },
                "from": {
                    "emailAddress": {
                        "name": "James Di Blasi | E²",
                        "address": "james.diblasi@engagesq.com"
                    }
                },
                "toRecipients": [
                    {
                        "emailAddress": {
                            "name": "Amon Houston | E²",
                            "address": "amon.houston@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Andrew Jolly | E²",
                            "address": "andrew.jolly@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Bex Balmer | E²",
                            "address": "rebecca.balmer@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Bryan Holyoake | E²",
                            "address": "bryan.holyoake@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Daniel Huong | E²",
                            "address": "daniel.huong@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Evan Tse | E²",
                            "address": "evan.tse@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Fadi Sarawan | E²",
                            "address": "fadi.sarawan@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Georgie Yeandle | E²",
                            "address": "georgie.yeandle@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Ian Anderson | E²",
                            "address": "ian.anderson@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Jack Hendy | E²",
                            "address": "jack.hendy@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Jady Mulqueeney | E²",
                            "address": "jady.mulqueeney@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "James Di Blasi | E²",
                            "address": "james.diblasi@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "James Mowatt | E²",
                            "address": "james.mowatt@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Jo Teirney | E²",
                            "address": "jo.teirney@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Justin McPhee | E²",
                            "address": "justin.mcphee@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Kat New | E²",
                            "address": "kat.new@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Kathryn Holyoake | E²",
                            "address": "kathryn.holyoake@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Kirsty Walker | E²",
                            "address": "kirsty.walker@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Liam Davison | E²",
                            "address": "liam.davison@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Maksim Murashka",
                            "address": "maksim@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Malcolm Denning | E²",
                            "address": "malcolm.denning@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Mariela Schultz | E²",
                            "address": "mariela.schultz@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Mark Powney | E²",
                            "address": "mark.powney@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Megan Strant | E²",
                            "address": "megan.strant@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Paul Ryan | E²",
                            "address": "paul.ryan@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Rachel Harnott | E²",
                            "address": "rachel.harnott@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Robert Carrington | E²",
                            "address": "robert.carrington@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Robert Reitsma | E²",
                            "address": "robert.reitsma@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Sam Lomax | E²",
                            "address": "sam.lomax@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Stephen Monk | E²",
                            "address": "stephen.monk@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Thomas Lalor | E²",
                            "address": "thomas.lalor@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Tim Moon",
                            "address": "tim.moon@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Tom Hiscutt | E²",
                            "address": "tom.hiscutt@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "William Brook | E²",
                            "address": "william.brook@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Monty Chanthapanya | E²",
                            "address": "monty.chanthapanya@engagesq.com"
                        }
                    }
                ],
                "ccRecipients": [],
                "bccRecipients": [],
                "replyTo": [],
                "flag": {
                    "flagStatus": "notFlagged"
                }
            },
            {
                "@odata.type": "#microsoft.graph.eventMessage",
                "@odata.etag": "W/\"CwAAABYAAABa7mptVE4HQKBwx8c3fQt/AABz/VCA\"",
                "id": "AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MABGAAAAAABMBxLVaWnHRbJW6kQao8ObBwBa7mptVE4HQKBwx8c3fQt-AAAAAAEKAABa7mptVE4HQKBwx8c3fQt-AAB0IJyBAAA=",
                "createdDateTime": "2018-09-17T04:42:25Z",
                "lastModifiedDateTime": "2018-09-17T04:44:41Z",
                "changeKey": "CwAAABYAAABa7mptVE4HQKBwx8c3fQt/AABz/VCA",
                "categories": [],
                "receivedDateTime": "2018-09-17T04:42:26Z",
                "sentDateTime": "2018-09-17T04:42:24Z",
                "hasAttachments": false,
                "internetMessageId": "<ME1PR01MB046870767671D10C9A59BCC3B71E0@ME1PR01MB0468.ausprd01.prod.outlook.com>",
                "subject": "Brown bag: Delivering ATO's intranet in 3 months",
                "bodyPreview": "Hey all,\r\n\r\nFollowing up from our little teaser last Friday, Thomas Lalor and I will be chatting about what we’ve learned delivering the ATO Intranet with tight timeframes and technical complexity. It would be great to see you all there, I’ve setup a team",
                "importance": "normal",
                "parentFolderId": "AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MAAuAAAAAABMBxLVaWnHRbJW6kQao8ObAQBa7mptVE4HQKBwx8c3fQt-AAAAAAEKAAA=",
                "conversationId": "AAQkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MAAQAM243o3lE89ArPXHjYWVnT0=",
                "isDeliveryReceiptRequested": null,
                "isReadReceiptRequested": false,
                "isRead": false,
                "isDraft": false,
                "webLink": "https://outlook.office365.com/owa/?ItemID=AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MABGAAAAAABMBxLVaWnHRbJW6kQao8ObBwBa7mptVE4HQKBwx8c3fQt%2FAAAAAAEKAABa7mptVE4HQKBwx8c3fQt%2FAAB0IJyBAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
                "inferenceClassification": "focused",
                "meetingMessageType": "meetingRequest",
                "body": {
                    "contentType": "html",
                    "content": "<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=Windows-1252\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\n@font-face\r\n\t{font-family:\"Segoe UI\"}\r\n@font-face\r\n\t{font-family:\"Segoe UI Semibold\"}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-AU\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">Hey all, </p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">Following up from our little teaser last Friday, Thomas Lalor and I will be chatting about what we’ve learned delivering the ATO Intranet with tight timeframes and technical complexity. It would be great to see you all there, I’ve setup\r\n a teams meeting for all interstaters and anyone WFH to join.</p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">Thanks, </p>\r\n<p class=\"MsoNormal\"><br>\r\nJames</p>\r\n<p class=\"MsoNormal\"><span style=\"color:gray\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"color:gray\">________________________________________________________________________________</span>\r\n</p>\r\n<div>\r\n<div style=\"margin-top:18.0pt; margin-bottom:7.5pt\">\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"><a href=\"https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTkzNWEyNzItZTJiZC00MDNlLWE3NzAtMDM3NmY5ODY4YjVl%40thread.skype/0?context=%7b%22Tid%22%3a%224623aa6f-4e58-4a9a-b765-ea2f8fae58d6%22%2c%22Oid%22%3a%22530411da-71b2-46ad-8814-4781f89f9601%22%7d\" target=\"_blank\"><span style=\"font-size:13.5pt; font-family:&quot;Segoe UI Semibold&quot;,sans-serif; color:#6264A7; text-decoration:none\">Join\r\n Microsoft Teams Meeting</span></a> </span></p>\r\n</div>\r\n<div>\r\n<div>\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"><a href=\"tel:&#43;61%202%208318%200090,,32128306# \" target=\"_blank\"><span style=\"font-size:10.5pt; color:#6264A7; text-decoration:none\">&#43;61 2 8318 0090</span></a>\r\n</span><span style=\"font-size:9.0pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">&nbsp; Australia, Sydney (Toll)\r\n</span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"></span></p>\r\n</div>\r\n</div>\r\n<div style=\"margin-top:7.5pt; margin-bottom:15.0pt\">\r\n<p class=\"MsoNormal\"><span style=\"font-size:9.0pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">Conference ID:\r\n</span><span style=\"font-size:10.5pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">321 283 06#\r\n</span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"></span></p>\r\n</div>\r\n<div style=\"margin-bottom:18.0pt\">\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"><a href=\"https://dialin.teams.microsoft.com/84e6b9a6-41f5-453b-b764-0ad984666118?id=32128306\" target=\"_blank\"><span style=\"font-size:9.0pt; color:#6264A7; text-decoration:none\">Local\r\n numbers</span></a> | <a href=\"https://mysettings.lync.com/pstnconferencing\" target=\"_blank\">\r\n<span style=\"font-size:9.0pt; color:#6264A7; text-decoration:none\">Reset PIN</span></a> |\r\n<a href=\"https://go.microsoft.com/fwlink/?linkid=857250\" target=\"_blank\"><span style=\"font-size:9.0pt; color:#6264A7; text-decoration:none\">Learn more about Teams</span></a>\r\n</span></p>\r\n</div>\r\n</div>\r\n<div>\r\n<p class=\"MsoNormal\"><span style=\"color:gray\">________________________________________________________________________________</span>\r\n</p>\r\n</div>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n<div id=\"a59ada49-a492-4f1d-ac57-74be3a4194fc\" style=\"display:inline-block\">\r\n<table cellspacing=\"0\" style=\"table-layout:fixed; width:50px; border:0 none black\">\r\n<tbody>\r\n<tr>\r\n<td style=\"height:18px; padding:0; border-width:0 0 1px 0; border-style:none none solid none; border-color:#EAEAEA\">\r\n&nbsp;</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<table cellspacing=\"0\" style=\"table-layout:fixed; width:90%; line-height:17px; border:0 none black\">\r\n<tbody>\r\n<tr>\r\n<td style=\"height:17px; padding:0; border:0 none black\">&nbsp;</td>\r\n</tr>\r\n<tr>\r\n<td style=\"padding:0; border:0 none black; color:#666666; font-size:12px; font-family:'Segoe UI','Segoe WP',sans-serif\">\r\nTo stop receiving messages from <a href=\"https://outlook.office365.com/owa/Engage@engagesq.com/groupsubscription.ashx?realm=engagesq.com&amp;source=EscalatedMessage&amp;action=conversations\" style=\"color:#0072C6; text-decoration:none; font-size:12px; font-family:'Segoe UI Semibold','Segoe WP Semibold','Segoe UI','Segoe WP',sans-serif\">\r\nEngage²</a> group, <a id=\"BD5134C6-8D33-4ABA-A0C4-08581FDF89DB\" href=\"https://outlook.office365.com/owa/Engage@engagesq.com/groupsubscription.ashx?realm=engagesq.com&amp;source=EscalatedMessage&amp;action=unsubscribe\" style=\"color:#0072C6; text-decoration:none; font-size:12px; font-family:'Segoe UI Semibold','Segoe WP Semibold','Segoe UI','Segoe WP',sans-serif\">\r\nstop following it</a>.</td>\r\n</tr>\r\n<tr>\r\n<td style=\"height:17px; padding:0; border:0 none black\">&nbsp;</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</div>\r\n</body>\r\n</html>\r\n"
                },
                "sender": {
                    "emailAddress": {
                        "name": "Stephen Monk | E²",
                        "address": "stephen.monk@engagesq.com"
                    }
                },
                "from": {
                    "emailAddress": {
                        "name": "Engage²",
                        "address": "Engage@engagesq.com"
                    }
                },
                "toRecipients": [
                    {
                        "emailAddress": {
                            "name": "James Di Blasi | E²",
                            "address": "james.diblasi@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Engage²",
                            "address": "Engage@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Stephen Monk | E²",
                            "address": "stephen.monk@engagesq.com"
                        }
                    }
                ],
                "ccRecipients": [],
                "bccRecipients": [],
                "replyTo": [],
                "flag": {
                    "flagStatus": "notFlagged"
                }
            },
            {
                "@odata.etag": "W/\"CQAAABQAAABDTBighI5CQZI8Elcsi12KAADqBw==\"",
                "id": "AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MABGAAAAAABMBxLVaWnHRbJW6kQao8ObBwBa7mptVE4HQKBwx8c3fQt-AAAAAAEPAABa7mptVE4HQKBwx8c3fQt-AAAHBtopAAA=",
                "createdDateTime": "2018-09-13T02:02:41Z",
                "lastModifiedDateTime": "2018-09-13T01:59:04Z",
                "changeKey": "CQAAABQAAABDTBighI5CQZI8Elcsi12KAADqBw==",
                "categories": [],
                "receivedDateTime": "2018-09-13T02:02:32Z",
                "sentDateTime": "2018-09-13T02:02:41Z",
                "hasAttachments": false,
                "internetMessageId": "<ME2PR01MB3779A5B16386D5321AA001F6E61A0@ME2PR01MB3779.ausprd01.prod.outlook.com>",
                "subject": "RE: New site collections",
                "bodyPreview": "Hey Claire,\r\n\r\nThe remaining sites have been created.\r\n\r\n\r\n\r\nFrom: Claire Tubman <claire.tubman@utas.edu.au>\r\nSent: Thursday, 13 September 2018 10:56 AM\r\nTo: Daniel Huong | E² <daniel.huong@engagesq.com>; Jo Teirney | E² <jo.teirney@engagesq.com>; Mark Po",
                "importance": "normal",
                "parentFolderId": "AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MAAuAAAAAABMBxLVaWnHRbJW6kQao8ObAQBa7mptVE4HQKBwx8c3fQt-AAAAAAEPAAA=",
                "conversationId": "AAQkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MAAQAM1P-8cUskbpkJifwsa_gQE=",
                "isDeliveryReceiptRequested": false,
                "isReadReceiptRequested": false,
                "isRead": false,
                "isDraft": true,
                "webLink": "https://outlook.office365.com/owa/?ItemID=AAMkAGU3MzEyODVlLTYxZDMtNGNiZC04M2ZlLTAyNzg4MjhlYTE5MABGAAAAAABMBxLVaWnHRbJW6kQao8ObBwBa7mptVE4HQKBwx8c3fQt%2FAAAAAAEPAABa7mptVE4HQKBwx8c3fQt%2FAAAHBtopAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
                "inferenceClassification": "focused",
                "body": {
                    "contentType": "html",
                    "content": "<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=iso-8859-1\">\r\n<meta name=\"ProgId\" content=\"Word.Document\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15\">\r\n<meta name=\"Originator\" content=\"Microsoft Word 15\">\r\n<link rel=\"File-List\" href=\"cid:filelist.xml@01D44B59.A69A9C70\"><link rel=\"Edit-Time-Data\" href=\"cid:editdata.mso\"><link rel=\"themeData\" href=\"~~themedata~~\"><link rel=\"colorSchemeMapping\" href=\"~~colorschememapping~~\"><style>\r\n<!--\r\n@font-face\r\n\t{font-family:Helvetica}\r\n@font-face\r\n\t{font-family:Wingdings}\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\n@font-face\r\n\t{font-family:Verdana}\r\n@font-face\r\n\t{font-family:\"Segoe UI\"}\r\n@font-face\r\n\t{font-family:\"Open Sans\"}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:12.0pt;\r\n\tfont-family:\"Times New Roman\",serif}\r\nspan.EmailStyle19\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\nspan.EmailStyle20\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:#1F497D}\r\nspan.EmailStyle21\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\nspan.EmailStyle22\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\nspan.EmailStyle23\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\nspan.EmailStyle24\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:#1F497D}\r\nspan.EmailStyle25\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\nspan.EmailStyle27\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-AU\" link=\"#0563C1\" vlink=\"#954F72\" style=\"\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\"><span style=\"\">Hey Claire,</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">The remaining sites have been created.</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><a name=\"_MailEndCompose\"><span style=\"\">&nbsp;</span></a></p>\r\n<span style=\"\"></span>\r\n<div>\r\n<div style=\"border:none; border-top:solid #E1E1E1 1.0pt; padding:3.0pt 0cm 0cm 0cm\">\r\n<p class=\"MsoNormal\"><a name=\"_MailOriginal\"><b><span lang=\"EN-US\" style=\"\">From:</span></b></a><span style=\"\"><span lang=\"EN-US\" style=\"\"> Claire Tubman &lt;claire.tubman@utas.edu.au&gt;\r\n<br>\r\n<b>Sent:</b> Thursday, 13 September 2018 10:56 AM<br>\r\n<b>To:</b> Daniel Huong | E² &lt;daniel.huong@engagesq.com&gt;; Jo Teirney | E² &lt;jo.teirney@engagesq.com&gt;; Mark Powney | E² &lt;mark.powney@engagesq.com&gt;<br>\r\n<b>Cc:</b> Brendan Thannhauser &lt;brendan.thannhauser@utas.edu.au&gt;; hilary.soloff &lt;hilary.soloff@utas.edu.au&gt;; Bex Balmer | E² &lt;rebecca.balmer@engagesq.com&gt;; Stephen Monk | E² &lt;stephen.monk@engagesq.com&gt;<br>\r\n<b>Subject:</b> RE: New site collections</span></span></p>\r\n</div>\r\n</div>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">Thanks everyone! </span>\r\n</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">This is a great help\r\n</span></span><span style=\"\"><span style=\"font-family:Wingdings; color:#1F497D\">J</span><span style=\"color:#1F497D\"></span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">&nbsp;</span></span></p>\r\n<div>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><b><i><span style=\"font-size:10.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#131213\">Please note: I currently only work Tuesday-Thursday at the University. Emails will be checked\r\n</span></i></b></span><span style=\"\"><b><i><span style=\"font-size:10.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#222222; background:white\">sporadically</span></i></b></span><span style=\"\"><b><i><span style=\"font-size:10.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#131213\">\r\n on Monday and Friday.</span></i></b></span><span style=\"\"><b><i><span style=\"font-size:12.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#131213\"></span></i></b></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><b><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">&nbsp;</span></b></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><b><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">Claire Tubman</span></b></span><span style=\"\"><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\"><br>\r\nSenior Project Manager<br>\r\nITS <br>\r\nUniversity of Tasmania<br>\r\nLevel 1, Corporate Services Buidling<br>\r\nCollege Road<br>\r\nSandy Bay TAS 7005<br>\r\n&#43;61 3 6226 2518 | 0448 003448<br>\r\n</span></span><a href=\"http://www.utas.edu.au/\"><span style=\"\"><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#E32213\">www.utas.edu.au/</span></span><span style=\"\"></span></a><span style=\"\"><span style=\"font-size:10.0pt; font-family:&quot;Open Sans&quot;; color:#131213\"><br>\r\n<img border=\"0\" width=\"200\" height=\"190\" id=\"_x0000_i1025\" src=\"cid:image001.jpg@01D44B59.A69A9C70\" alt=\"Electronic Signature\"></span></span><span style=\"\"><span lang=\"EN-US\" style=\"font-size:12.0pt; font-family:&quot;Open Sans&quot;; color:#1F497D\"></span></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><span style=\"font-size:7.5pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">CRICOS 00586B</span></span></p>\r\n<p class=\"MsoNormal\" style=\"margin-right:0cm; margin-bottom:16.8pt; margin-left:0cm; background:white\">\r\n<span style=\"\"><b><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">Printing</span></b></span><span style=\"\"><b><span lang=\"EN-US\" style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\"></span></b></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><span style=\"font-size:7.5pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">To benefit the environment we advise that people avoid printing emails, or only print the section of the email they require\r\n by printing the highlighted text or by only printing page one.</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span lang=\"EN-US\" style=\"font-size:8.0pt; font-family:&quot;Helvetica&quot;,sans-serif; color:#1F497D\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span lang=\"EN-US\" style=\"color:#1F497D\">&nbsp;</span></span></p>\r\n</div>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">&nbsp;</span></span></p>\r\n<div>\r\n<div style=\"border:none; border-top:solid #E1E1E1 1.0pt; padding:3.0pt 0cm 0cm 0cm\">\r\n<p class=\"MsoNormal\" style=\"\"><span style=\"\"><b><span lang=\"EN-US\" style=\"\">From:</span></b></span><span style=\"\"><span lang=\"EN-US\" style=\"\"> Daniel Huong | E² &lt;</span></span><a href=\"mailto:daniel.huong@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">daniel.huong@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;\r\n<br>\r\n<b>Sent:</b> Wednesday, 12 September 2018 6:16 PM<br>\r\n<b>To:</b> Jo Teirney | E² &lt;</span></span><a href=\"mailto:jo.teirney@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">jo.teirney@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;; Claire Tubman &lt;</span></span><a href=\"mailto:claire.tubman@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">claire.tubman@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;;\r\n Mark Powney | E² &lt;</span></span><a href=\"mailto:mark.powney@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">mark.powney@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;<br>\r\n<b>Cc:</b> Brendan Thannhauser &lt;</span></span><a href=\"mailto:brendan.thannhauser@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">brendan.thannhauser@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;; Hilary\r\n Soloff &lt;</span></span><a href=\"mailto:hilary.soloff@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">hilary.soloff@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;; Bex Balmer | E² &lt;</span></span><a href=\"mailto:rebecca.balmer@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">rebecca.balmer@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;;\r\n Stephen Monk | E² &lt;</span></span><a href=\"mailto:stephen.monk@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">stephen.monk@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;<br>\r\n<b>Subject:</b> RE: New site collections</span></span></p>\r\n</div>\r\n</div>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">Hi Claire,</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">The following site collections have been created today. The remaining will be completed by around 1pm tomorrow.</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"></span><a href=\"https://universitytasmania.sharepoint.com/sites/governance\"><span style=\"\">https://universitytasmania.sharepoint.com/sites/governance</span></a><span style=\"\"><u><span style=\"color:#0563C1\"></span></u></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"></span><a href=\"https://universitytasmania.sharepoint.com/sites/culture-and-wellbeing\"><span style=\"\">https://universitytasmania.sharepoint.com/sites/culture-and-wellbeing</span></a><span style=\"\"><u><span style=\"color:#0563C1\"></span></u></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"></span><a href=\"https://universitytasmania.sharepoint.com/sites/strategy-and-planning\"><span style=\"\">https://universitytasmania.sharepoint.com/sites/strategy-and-planning</span></a><span style=\"\"><u><span style=\"color:#0563C1\"></span></u></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">Regards,</span></span></p>\r\n<p class=\"MsoNormal\" style=\"line-height:115%\"><span style=\"\"><b><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:black\">&nbsp;</span></b></span></p>\r\n<p class=\"MsoNormal\" style=\"line-height:115%\"><span style=\"\"><b><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:black\">Daniel Huong,\r\n</span></b></span><span style=\"\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:black\"></span></span></p>\r\n<p class=\"MsoNormal\" style=\"margin-bottom:12.0pt; line-height:115%\"><span style=\"\"><span style=\"font-size:9.0pt; line-height:115%; font-family:&quot;Segoe UI&quot;,sans-serif\">&#43;61 421 119 005 |&nbsp;\r\n</span></span><a href=\"mailto:daniel.huong@engagesq.com\"><span style=\"\"><span style=\"font-size:9.0pt; line-height:115%; font-family:&quot;Segoe UI&quot;,sans-serif\">daniel.huong@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span style=\"font-size:9.0pt; line-height:115%; font-family:&quot;Segoe UI&quot;,sans-serif; color:#333333; background:white\"></span></span></p>\r\n<p class=\"MsoNormal\" style=\"line-height:150%\"><span style=\"\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif\"><img border=\"0\" width=\"176\" height=\"42\" id=\"_x0000_i1026\" src=\"cid:image002.png@01D44B59.A69A9C70\" alt=\"cid:image002.png@01D29277.37201A60\"></span></span></p>\r\n<p class=\"MsoNormal\" style=\"line-height:120%\"><span style=\"\"><b><span style=\"font-size:9.0pt; line-height:120%; font-family:&quot;Segoe UI&quot;,sans-serif; color:#C00000\">Engage<sup>2</sup></span></b></span><span style=\"\"><span style=\"font-size:9.0pt; line-height:120%; font-family:&quot;Segoe UI&quot;,sans-serif; color:#C00000\">&nbsp;\r\n</span></span><span style=\"\"><span style=\"font-size:9.0pt; line-height:120%; font-family:&quot;Segoe UI&quot;,sans-serif\">|&nbsp; Microsoft Gold Partner&nbsp; |&nbsp;\r\n</span></span><a href=\"http://www.engagesq.com/\" target=\"_blank\"><span style=\"\"><span style=\"font-size:9.0pt; line-height:120%; font-family:&quot;Segoe UI&quot;,sans-serif\">engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span style=\"font-size:9.0pt; line-height:120%; font-family:&quot;Segoe UI&quot;,sans-serif\"></span></span></p>\r\n<p class=\"MsoNormal\" style=\"line-height:120%\"><span style=\"\"><span style=\"font-size:9.0pt; line-height:120%; font-family:&quot;Segoe UI&quot;,sans-serif; color:#C00000; background:white\">Bringing people and technology together to drive digital productivity</span></span></p>\r\n<p class=\"MsoNormal\" style=\"line-height:120%\"><span style=\"\"><b><span style=\"font-size:9.0pt; line-height:120%; font-family:&quot;Segoe UI&quot;,sans-serif\">Melbourne&nbsp; |&nbsp;\r\n</span></b></span><span style=\"\"><span style=\"font-size:9.0pt; line-height:120%; font-family:&quot;Segoe UI&quot;,sans-serif\">Sydney<b>&nbsp; |&nbsp;\r\n</b>Brisbane<b>&nbsp; |&nbsp; </b>Auckland<b>&nbsp; |&nbsp; </b>Minsk<span style=\"color:#666666\"></span></span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">&nbsp;</span></span></p>\r\n<div>\r\n<div style=\"border:none; border-top:solid #E1E1E1 1.0pt; padding:3.0pt 0cm 0cm 0cm\">\r\n<p class=\"MsoNormal\" style=\"\"><span style=\"\"><b><span lang=\"EN-US\" style=\"\">From:</span></b></span><span style=\"\"><span lang=\"EN-US\" style=\"\"> Jo Teirney | E²\r\n<br>\r\n<b>Sent:</b> Wednesday, 12 September 2018 6:03 PM<br>\r\n<b>To:</b> claire.tubman &lt;</span></span><a href=\"mailto:claire.tubman@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">claire.tubman@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;; Mark Powney | E² &lt;</span></span><a href=\"mailto:mark.powney@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">mark.powney@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;<br>\r\n<b>Cc:</b> Brendan Thannhauser &lt;</span></span><a href=\"mailto:brendan.thannhauser@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">brendan.thannhauser@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;; hilary.soloff\r\n &lt;</span></span><a href=\"mailto:hilary.soloff@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">hilary.soloff@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;; Daniel Huong | E² &lt;</span></span><a href=\"mailto:daniel.huong@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">daniel.huong@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;<br>\r\n<b>Subject:</b> RE: New site collections</span></span></p>\r\n</div>\r\n</div>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">Hi Claire</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">Daniel has been working on this and will provide an update this evening.</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">Kind regards</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">Jo</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"\">&nbsp;</span></span></p>\r\n<div>\r\n<div style=\"border:none; border-top:solid #E1E1E1 1.0pt; padding:3.0pt 0cm 0cm 0cm\">\r\n<p class=\"MsoNormal\" style=\"\"><span style=\"\"><b><span lang=\"EN-US\" style=\"\">From:</span></b></span><span style=\"\"><span lang=\"EN-US\" style=\"\"> Claire Tubman &lt;</span></span><a href=\"mailto:claire.tubman@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">claire.tubman@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;\r\n<br>\r\n<b>Sent:</b> Wednesday, 12 September 2018 9:11 AM<br>\r\n<b>To:</b> Mark Powney | E² &lt;</span></span><a href=\"mailto:mark.powney@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">mark.powney@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;; Jo Teirney | E² &lt;</span></span><a href=\"mailto:jo.teirney@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">jo.teirney@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;<br>\r\n<b>Cc:</b> Brendan Thannhauser &lt;</span></span><a href=\"mailto:brendan.thannhauser@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">brendan.thannhauser@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;; hilary.soloff\r\n &lt;</span></span><a href=\"mailto:hilary.soloff@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">hilary.soloff@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;<br>\r\n<b>Subject:</b> RE: New site collections</span></span></p>\r\n</div>\r\n</div>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">Hi there,</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">Just checking in to gauge an ETA on these site collections. Can you please let me know when I can expect to have some/all available?</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">Thanks,<br>\r\nC</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">&nbsp;</span></span></p>\r\n<div>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><b><i><span style=\"font-size:10.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#131213\">Please note: I currently only work Tuesday-Thursday at the University. Emails will be checked\r\n</span></i></b></span><span style=\"\"><b><i><span style=\"font-size:10.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#222222; background:white\">sporadically</span></i></b></span><span style=\"\"><b><i><span style=\"font-size:10.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#131213\">\r\n on Monday and Friday.</span></i></b></span><span style=\"\"><b><i><span style=\"font-size:12.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#131213\"></span></i></b></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><b><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">&nbsp;</span></b></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><b><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">Claire Tubman</span></b></span><span style=\"\"><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\"><br>\r\nSenior Project Manager<br>\r\nITS <br>\r\nUniversity of Tasmania<br>\r\nLevel 1, Corporate Services Buidling<br>\r\nCollege Road<br>\r\nSandy Bay TAS 7005<br>\r\n&#43;61 3 6226 2518 | 0448 003448<br>\r\n</span></span><a href=\"http://www.utas.edu.au/\"><span style=\"\"><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#E32213\">www.utas.edu.au/</span></span><span style=\"\"></span></a><span style=\"\"><span style=\"font-size:10.0pt; font-family:&quot;Open Sans&quot;; color:#131213\"><br>\r\n<img border=\"0\" width=\"200\" height=\"190\" id=\"_x0000_i1027\" src=\"cid:image001.jpg@01D44B59.A69A9C70\" alt=\"Electronic Signature\"></span></span><span style=\"\"><span lang=\"EN-US\" style=\"font-size:12.0pt; font-family:&quot;Open Sans&quot;; color:#1F497D\"></span></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><span style=\"font-size:7.5pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">CRICOS 00586B</span></span></p>\r\n<p class=\"MsoNormal\" style=\"margin-right:0cm; margin-bottom:16.8pt; margin-left:0cm; background:white\">\r\n<span style=\"\"><b><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">Printing</span></b></span><span style=\"\"><b><span lang=\"EN-US\" style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\"></span></b></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><span style=\"font-size:7.5pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">To benefit the environment we advise that people avoid printing emails, or only print the section of the email they require\r\n by printing the highlighted text or by only printing page one.</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span lang=\"EN-US\" style=\"font-size:8.0pt; font-family:&quot;Helvetica&quot;,sans-serif; color:#1F497D\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span lang=\"EN-US\" style=\"color:#1F497D\">&nbsp;</span></span></p>\r\n</div>\r\n<p class=\"MsoNormal\"><span style=\"\"><span style=\"color:#1F497D\">&nbsp;</span></span></p>\r\n<div>\r\n<div style=\"border:none; border-top:solid #E1E1E1 1.0pt; padding:3.0pt 0cm 0cm 0cm\">\r\n<p class=\"MsoNormal\" style=\"\"><span style=\"\"><b><span lang=\"EN-US\" style=\"\">From:</span></b></span><span style=\"\"><span lang=\"EN-US\" style=\"\"> Claire Tubman\r\n<br>\r\n<b>Sent:</b> Tuesday, 11 September 2018 12:43 PM<br>\r\n<b>To:</b> Mark Powney | E² &lt;</span></span><a href=\"mailto:mark.powney@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">mark.powney@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;; 'Jo Teirney | E²' &lt;</span></span><a href=\"mailto:jo.teirney@engagesq.com\"><span style=\"\"><span lang=\"EN-US\" style=\"\">jo.teirney@engagesq.com</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;<br>\r\n<b>Cc:</b> Brendan Thannhauser &lt;</span></span><a href=\"mailto:Brendan.Thannhauser@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">Brendan.Thannhauser@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;; Hilary\r\n Soloff &lt;</span></span><a href=\"mailto:Hilary.Soloff@utas.edu.au\"><span style=\"\"><span lang=\"EN-US\" style=\"\">Hilary.Soloff@utas.edu.au</span></span><span style=\"\"></span></a><span style=\"\"><span lang=\"EN-US\" style=\"\">&gt;<br>\r\n<b>Subject:</b> New site collections</span></span></p>\r\n</div>\r\n</div>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">Hello there,</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">We are at the point of needing some new site collections created. Could you please organise for the attached to be created? (noting only the second half of the list needs to be created).</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">If there is a way for us to do this in house, we welcome the instructions so as to save us both time. I have convened the migration team to commence this work on Thursday hence I will need some, if not all site collections\r\n ready for then please.</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">Let me know if you need more information.</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">Thanks,<br>\r\nClaire </span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><b><i><span style=\"font-size:10.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#131213\">Please note: I currently only work Tuesday-Thursday at the University. Emails will be checked\r\n</span></i></b></span><span style=\"\"><b><i><span style=\"font-size:10.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#222222; background:white\">sporadically</span></i></b></span><span style=\"\"><b><i><span style=\"font-size:10.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#131213\">\r\n on Monday and Friday.</span></i></b></span><span style=\"\"><b><i><span style=\"font-size:12.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#131213\"></span></i></b></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><b><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">&nbsp;</span></b></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><b><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">Claire Tubman</span></b></span><span style=\"\"><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\"><br>\r\nSenior Project Manager<br>\r\nITS <br>\r\nUniversity of Tasmania<br>\r\nLevel 1, Corporate Services Buidling<br>\r\nCollege Road<br>\r\nSandy Bay TAS 7005<br>\r\n&#43;61 3 6226 2518 | 0448 003448<br>\r\n</span></span><a href=\"http://www.utas.edu.au/\"><span style=\"\"><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#E32213\">www.utas.edu.au/</span></span><span style=\"\"></span></a><span style=\"\"><span style=\"font-size:10.0pt; font-family:&quot;Open Sans&quot;; color:#131213\"><br>\r\n<img border=\"0\" width=\"200\" height=\"190\" id=\"Picture_x0020_1\" src=\"cid:image001.jpg@01D44B59.A69A9C70\" alt=\"Electronic Signature\"></span></span><span style=\"\"><span lang=\"EN-US\" style=\"font-size:12.0pt; font-family:&quot;Open Sans&quot;\"></span></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><span style=\"font-size:7.5pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">CRICOS 00586B</span></span></p>\r\n<p class=\"MsoNormal\" style=\"margin-right:0cm; margin-bottom:16.8pt; margin-left:0cm; background:white\">\r\n<span style=\"\"><b><span style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">Printing</span></b></span><span style=\"\"><b><span lang=\"EN-US\" style=\"font-size:10.0pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\"></span></b></span></p>\r\n<p class=\"MsoNormal\" style=\"background:white\"><span style=\"\"><span style=\"font-size:7.5pt; font-family:&quot;Verdana&quot;,sans-serif; color:#131213\">To benefit the environment we advise that people avoid printing emails, or only print the section of the email they require\r\n by printing the highlighted text or by only printing page one.</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span lang=\"EN-US\" style=\"font-size:8.0pt; font-family:&quot;Helvetica&quot;,sans-serif\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\"><span lang=\"EN-US\" style=\"\">&nbsp;</span></span></p>\r\n<p class=\"MsoNormal\"><span style=\"\">&nbsp;</span></p>\r\n<p style=\"line-height:10.0pt\"><span style=\"\"><span style=\"font-size:10.0pt\"><br>\r\n<br>\r\nUniversity of Tasmania Electronic Communications Policy (December, 2014). <br>\r\nThis email is confidential, and is for the intended recipient only. Access, disclosure, copying, distribution, or reliance on any of it by anyone outside the intended recipient organisation is prohibited and may be a criminal offence. Please delete if obtained\r\n in error and email confirmation to the sender. The views expressed in this email are not necessarily the views of the University of Tasmania, unless clearly intended otherwise.\r\n</span></span><span style=\"font-size:10.0pt\"></span></p>\r\n</div>\r\n</body>\r\n</html>\r\n"
                },
                "toRecipients": [
                    {
                        "emailAddress": {
                            "name": "Claire Tubman",
                            "address": "claire.tubman@utas.edu.au"
                        }
                    }
                ],
                "ccRecipients": [
                    {
                        "emailAddress": {
                            "name": "Brendan Thannhauser",
                            "address": "brendan.thannhauser@utas.edu.au"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "hilary.soloff",
                            "address": "hilary.soloff@utas.edu.au"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Bex Balmer | E²",
                            "address": "rebecca.balmer@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Stephen Monk | E²",
                            "address": "stephen.monk@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Jo Teirney | E²",
                            "address": "jo.teirney@engagesq.com"
                        }
                    },
                    {
                        "emailAddress": {
                            "name": "Mark Powney | E²",
                            "address": "mark.powney@engagesq.com"
                        }
                    }
                ],
                "bccRecipients": [],
                "replyTo": [],
                "flag": {
                    "flagStatus": "notFlagged"
                }
            },
        ];
        return Promise.resolve(MockData);
    }
}