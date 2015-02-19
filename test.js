window.vmWare = {};
jsonData = {},
    totalQuestions = 0,
    answeredQuestions = [],
    answerId = "",
    vmWare.helpers = {
        placeholder: function (text, data) {
            var newText = text;
            $.each(data, function (i, val) {
                newText = vmWare.helpers.replaceString(newText, val.id, val.value);
            });
            return newText;
        },

        replaceString: function (text, id, value) {
            var re = new RegExp("{{" + id + "}}", 'g');
            return text.replace(re, value);
        },

        validString: function(text){
            var re = new RegExp(/[^a-z0-9]/gi);// /^[a-z0-9]+$/);
            if ((!text) || text.toString().length == 0) {
                return "";
            }
            else {
                return text.toString().replace(re, "");
            }
        },

        getId: function (text, identifier) {
            return text.replace(identifier, '');
        },

        setAnswer: function (value, element) {
            $('.choices-value').removeClass('choices-active');
            answerId = value;

            if (element) {
                $(element).children('.choices-value').addClass('choices-active');
            }
        },

        gaq: function (elem) {
            var $this = $(elem);
            var category = vmWare.helpers.validString($this.data('category'));
            var action = "click";
            var label = vmWare.helpers.validString($this.data('label'));
            var hitType = 'event';
            ga('send', {
                'hitType': hitType, //pageview, event
                'eventCategory': category,
                'eventAction': action,
                'eventLabel': label
            });


        },

        gaq_pageview: function(title)
        {
            title = vmWare.helpers.validString(title)
            ga('send', {
                'hitType': 'pageview',
                'page': '/' + title,
                'title': title
            });
        }

    },
    vmWare.config = {
        containers: {
            welcomeContainer: $('#welcomeContainer'),
            questionContainer: $('#questionContainer'),
            choiceContainer: $('#choiceContainer'),
            answerGridContainer: $('#answerGridContainer')
        },

        selectors: {
            welcomeSelector: '.welcome',
            questionSelector: '.question-selector',
            choiceSelector: '.choice-selector',
            submitAnswerSelector: '.submit-choice',
            backAnswerSelector: '.back-choice',
            answerSelector: '.answer-selector',
            moreQuestions: '.more-questions',
            backAnswer: '.back-answer',
            questionIdentifier: "Question_",
            tracking: '[rel=tracking]',
            popout: '[rel=popout]'
        },

        html: {
            questionGridHeaderHtml: "<div class='row vmHeader'><h1>Choose any question below to start...</h1></div>\
<div class='row'><h4>In an ever-evolving IT environment, there can be many ways to meet a new challenge or solve a problem. Compare your answer to commentary from Richard Munro, Chief Technologist and Technical Director, vCloud Air EMEA. </h4></div>",

            questionGridItemHtml: "<div id='{{selector}}{{id}}' class='col-sm-4 {{completed}}'> \
<a rel='tracking' data-category='question' data-label='{{text}}' class='thumbnail question-thumbnail {{questionSelector}}' style='background-image:url({{image}})'>\
    <div class='question-title'><h2>{{text}}</h2>{{button}}</div><div/></div></a>",

            questionHtml: "<div data-id='{{id}}' style='background-image:url({{image}})' class='questionWithImage'> \
    <div class='question-text'><h2>{{text}}</h2></div></div>",

            choicesGridHeaderHtml: "<div class='row vmHeader'><h1>{{title}}</h1></div> \
<div class='row'><h4>Please select the best match from the options below.</h4></div>",

            choicesGridItemHtml: "<div rel='tracking' data-category='choices' data-label='{{text}}'  class='{{selector}} choices row' data-id='{{id}}'>\
    <div class='col-xs-1 choices-index'>{{index}}</div>\
    <div class='col-xs-11 choices-value' ><p>{{text}}</p></div></div>",

            choiceHtml: "<div data-id='{{id}}'> \
    <div class='choice-text'>{{text}}</div> \
    <div class='choice-image'>{{image}}<div/></div>",

            submitAnswerHtml: "<a rel='tracking' data-category='submit-answer' data-label='{{id}}' style='display:none' class='submit-choice btn btn-primary pull-right' data-id='{{id}}'>Submit</a>",

            backHtml: "<a rel='tracking' data-category='back' data-label='choices' class='back-choice btn btn-primary'>Back</a>",

            answerHeaderHtml: "<div class='row answer-header'><div class='col-md-4'><h1>Your decision</h1></div><div class='col-md-8'><h5>{{text}}</h5></div></div>",

            answerHtml: "<div data-id='{{id}}' data-question-id='{{question_id}}' class='answer-selector'></div>",

            answerDetailHeader: "<div class='row'>\
<div class='col-sm-8'><h2>Richard\'s Commentary</h2></div>\
<div class='col-sm-4'><h2>Find out more...</h2></div>\
</div>",

            answerDetailHtml: "<div class='col-sm-8 answer-main'><div class='thumbnail answer-text'><p>{{text}}</p></div> \
    {{social}}<div class='questionActions'><a rel='tracking' data-category='back' data-label='answer' class='back-answer btn btn-primary'><i class='fa fa-step-backward'></i></a><a rel='tracking' data-category='answer' data-label='more-questions' class='more-questions btn btn-primary'>More questions</a></div><img src='resources/images/rich.png' class='rich hidden-xs'/><img src='resources/images/tri.svg' class='rich-triangle hidden-xs'/></div>",

            modalHtml: "<div class='modal fade' id='Asset_{{asset_id}}' tabindex='-1' role='dialog' aria-hidden='true'>\
      <div class='modal-dialog {{modal_class}}'>\
        <div class='modal-content {{modal_class}}'>\
          <div class='modal-header'>\
            <button rel='tracking' data-category='close-popout' data-label='Asset_{{asset_id}}' type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>\
            <h4 class='modal-title' id='myModalLabel'></h4>\
          </div>\
          <div class='modal-body'>\
            {{asset_url}} \
          </div>\
        </div>\
      </div>\
    </div>",

            modalButton: "<div class='col-sm-6 thumbnail asset-thumbnail'><img rel='tracking' data-category='popout' data-label='{{asset_id}}' class='asset' src='{{image}}' data-toggle='modal' data-target='#{{asset_id}}'> \
    </img><div class='caption'>{{title}}</div></div>",

            modalFinished: "<div class='modal fade' id='modalFinished' tabindex='-1' role='dialog' aria-hidden='true'>\
      <div class='modal-dialog'>\
        <div class='modal-content'>\
          <div class='modal-header'>\
            <button rel='tracking' data-category='completed-all-questions' data-label='close' type='button' class='close' onClick='location.reload();'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>\
            <h4 class='modal-title' id='myModalLabel'>You've completed all of the questions available</h4>\
          </div>\
          <div class='modal-body'>\
          Follow us on  <a rel='tracking' data-category='social' data-label='twitter' href='https://twitter.com/VMware_UK'>Twitter</a> or <a rel='tracking' data-category='social' data-label='facebook' href='https://www.facebook.com/vmwarevcloud'>Facebook</a> to find out when more questions are available. \
If you want to start again, click <a rel='tracking' data-category='completed-all-questions' data-label='start-over' onClick='location.reload();'>here</a>. \
          </div>\
        </div>\
      </div>\
    </div>",
            contactScript: "<div class='modal fade' id='modalContact' tabindex='-1' role='dialog' aria-hidden='true'>\
      <div class='modal-dialog'>\
        <div class='modal-content'>\
          <div class='modal-header'>\
            <button rel='tracking' data-category='contact' data-label='close' type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>\
            <h4 class='modal-title' id='myModalLabel'>Contact us...</h4>\
          </div>\
          <div class='modal-body'>\
          <iframe class='contact-frame' src=contact.html></iframe> \
          </div>\
        </div>\
      </div>\
    </div>",

            contactButton: "<button rel='tracking' data-category='contact' data-label='open-modal' class='btn btn-primary' data-toggle='modal' data-target='#modalContact'>Contact us</button>",

            social: "<div class='social-wrapper'>\
<div class='social'><p style='display:inline'>Share</p></div> \
<div class='social'><a rel=popout data-category='social' data-label='facebook' data-open-link='{{facebook}}'><i class='fa fa-facebook'></i></a></div>\
<div class='social'><a rel=popout data-category='social' data-label='twitter' data-open-link='{{twitter}}'><i class='fa fa-twitter'></i></a></div>\
<div class='social'><a rel=popout data-category='social' data-label='google-plus' data-open-link='{{google}}'><i class='fa fa-google-plus'></i></a></div>\
<div class='social'><a rel=popout data-category='social' data-label='linkedin' data-open-link='{{linkedin}}'><i class='fa fa-linkedin'></i></a></div>\
<div class='social'><a rel=popout data-category='social' data-label='email' data-open-link='{{email}}'><i class='fa fa-envelope'></i></a></div><br/>\
</div>",
            facebook: "https://www.facebook.com/sharer/sharer.php?u={{url}}&title={{title}}",
            twitter: "http://twitter.com/share?&text={{title}}",
            linkedin: "http://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{title}}&summary={articleSummary}&source={articleSource}",
            google: "https://plus.google.com/share?url={{url}}",
            email: "mailto:?subject=Ahead In The Cloud&body={{title}}"
        },
    },
    vmWare.functions = {
        setJsonData: function () {
            $.getJSON("resources/questions.json", function (json) {
                jsonData = json;
            });
        },

        questionGrid: function () {
            vmWare.config.containers.welcomeContainer.hide();
            vmWare.config.containers.choiceContainer.hide();
            vmWare.config.containers.answerGridContainer.hide();

            vmWare.config.containers.questionContainer.html("");
            vmWare.config.containers.questionContainer.append(vmWare.config.html.questionGridHeaderHtml);

            var questionRow = "<div class='row question-row'>";

            totalQuestions = 0;
            $.each(jsonData.Questions, function (i, val) {
                var data = [{ id: "id", value: i },
                    { id: "image", value: val.Question.Image },
                    { id: "text", value: val.Question.Title },
                    { id: "selector", value: vmWare.config.selectors.questionIdentifier },
                    { id: "questionSelector", value: vmWare.config.selectors.questionSelector.slice(1) }
                ];

                if ($.inArray(i, answeredQuestions) != -1) {
                    data.push({ id: "button", value: "<i class='fa fa-2x fa-check'></i>" }, { id: "completed", value: "completed" });
                }
                else {
                    data.push({ id: "button", value: "<btn class='btn btn-primary'>Select</btn>" }, { id: "completed", value: "" });
                }

                var dataToAppend = vmWare.helpers.placeholder(vmWare.config.html.questionGridItemHtml, data);

                questionRow += dataToAppend;
                totalQuestions++;
            });
            questionRow += "</div>"
            vmWare.config.containers.questionContainer.append(questionRow);
            vmWare.config.containers.questionContainer.show();

            vmWare.helpers.gaq_pageview('Question');
        },

        choicesGrid: function (element) {
            vmWare.config.containers.welcomeContainer.hide();
            vmWare.config.containers.questionContainer.hide();
            vmWare.config.containers.answerGridContainer.hide();

            vmWare.config.containers.choiceContainer.html("");

            var questionId = $(element).parent().attr('id'),
                id = vmWare.helpers.getId(questionId, vmWare.config.selectors.questionIdentifier),
                questionData = jsonData.Questions[id],
                text = questionData.Question.Text,
                image = questionData.Question.LargeImage,
                title = questionData.Question.Title;

            var titleToAppend = vmWare.helpers.placeholder(vmWare.config.html.choicesGridHeaderHtml, [{ id: "title", value: title }]);
            vmWare.config.containers.choiceContainer.append(titleToAppend);

            var data = [{ id: "text", value: text }, { id: "image", value: image }, { id: "selector", value: vmWare.config.selectors.questionSelector.slice(1) }];
            var dataToAppend = vmWare.helpers.placeholder(vmWare.config.html.questionHtml, data);
            vmWare.config.containers.choiceContainer.append(dataToAppend);

            $.each(questionData.Choices, function (i, val) {
                var choicesData = [
                    { id: "index", value: i + 1 },
                    { id: "id", value: i },
                    { id: "text", value: val.Choice },
                    { id: "selector", value: vmWare.config.selectors.choiceSelector.slice(1) }];

                var choicesToAppend = vmWare.helpers.placeholder(vmWare.config.html.choicesGridItemHtml, choicesData);
                vmWare.config.containers.choiceContainer.append(choicesToAppend);
            });

            vmWare.config.containers.choiceContainer.append(vmWare.config.html.backHtml);
            vmWare.config.containers.choiceContainer.append(vmWare.helpers.placeholder(vmWare.config.html.submitAnswerHtml, [{ id: "id", value: id }]));
            vmWare.config.containers.choiceContainer.show();

            vmWare.helpers.gaq_pageview('Choices-' + title);
        },

        answersGrid: function (element) {
            vmWare.config.containers.welcomeContainer.hide();
            vmWare.config.containers.questionContainer.hide();
            vmWare.config.containers.choiceContainer.hide();

            var $this = $(element),
                questionId = $this.data('id'),
                question = jsonData.Questions[questionId],
                choiceData = question.Choices[answerId];

            if ($.inArray(questionId, answeredQuestions) == -1) {
                answeredQuestions.push(questionId);
            }

            vmWare.config.containers.answerGridContainer.html("");

            var socialUrl = [{ id: "url", "value": url = window.location.href }, { id: "title", value: "Challenge your thinking and stay Ahead in the Cloud from @VMware_uk Ready? Choose wisely  http://bit.ly/AITCloud #vCloudAir #hybridcloud " }],
                facebook = vmWare.helpers.placeholder(vmWare.config.html.facebook, socialUrl),
                twitter = vmWare.helpers.placeholder(vmWare.config.html.twitter, socialUrl),
                linkedin = vmWare.helpers.placeholder(vmWare.config.html.linkedin, socialUrl),
                google = vmWare.helpers.placeholder(vmWare.config.html.google, socialUrl),
                email = vmWare.helpers.placeholder(vmWare.config.html.email, socialUrl);

            socialData = [{ id: "facebook", value: facebook }, { id: "twitter", value: twitter }, { id: "linkedin", value: linkedin }, { id: "google", value: google }, { id: "email", value: email }];

            var answerData = [
                { id: "text", value: choiceData.Answer.Text },
                { id: "social", value: vmWare.helpers.placeholder(vmWare.config.html.social, socialData) }
            ];

            vmWare.config.containers.answerGridContainer.append(vmWare.helpers.placeholder(
                vmWare.config.html.answerHeaderHtml, [{ id: "text", value: choiceData.Choice }]));

            vmWare.config.containers.answerGridContainer.append(vmWare.config.html.answerDetailHeader);

            var dataToAppend = "<div class='row'>";
            dataToAppend += vmWare.helpers.placeholder(vmWare.config.html.answerDetailHtml, answerData);

            dataToAppend += "<div class='col-sm-4'><div class='row'>";

            $.each(question.Question.Assets, function (i, val) {
                dataToAppend += vmWare.helpers.placeholder(vmWare.config.html.modalButton, [{ id: "title", value: val.Title }, { id: "image", value: val.Image }, { id: "asset_id", value: "Asset_" + val.Id }]);

                if (!$('#Asset_' + val.id).length > 0) {
                    var modalText = vmWare.helpers.placeholder(vmWare.config.html.modalHtml, [{ id: "asset_id", value: val.Id }, { id: "modal_class", value: val.ModalClass || "" }, { id: "asset_url", value: val.Url }, { id: "title", value: val.Title }]);
                    $('body').append(modalText);
                }
            });

            dataToAppend += "</div>";
            dataToAppend += "<div class='row'><h2>Get in touch...</h2>";
            dataToAppend += vmWare.config.html.contactButton;

            dataToAppend += "</div></div>";
            dataToAppend += "</div>";

            vmWare.config.containers.answerGridContainer.append(dataToAppend);

            $('body').append(vmWare.config.html.contactScript);

            vmWare.config.containers.answerGridContainer.show();

            vmWare.helpers.gaq_pageview('Answers-'+ choiceData.Choice);
        }
    }

$(document).ready(function () {
    vmWare.functions.setJsonData();
    $(vmWare.config.selectors.welcomeSelector).show();
});

$(document).on('click', vmWare.config.selectors.welcomeSelector, function (e) {
    vmWare.config.containers.welcomeContainer.hide();
    vmWare.functions.questionGrid();
});

$(document).on('click', vmWare.config.selectors.questionSelector, function (e) {
    vmWare.functions.choicesGrid(this);
});

$(document).on('click', vmWare.config.selectors.choiceSelector, function (e) {
    vmWare.helpers.setAnswer($(this).data('id'), this);
    $(vmWare.config.selectors.submitAnswerSelector).show();
});

$(document).on('click', vmWare.config.selectors.submitAnswerSelector, function (e) {
    vmWare.functions.answersGrid(this);
    $('[rel=popout]').click(function (event) {

        vmWare.helpers.gaq(this);
        var openLink = $(this).data("open-link");

        //Parameters for the Popup window
        winWidth = 650;
        winHeight = 450;
        winLeft = ($(window).width() - winWidth) / 2,
            winTop = ($(window).height() - winHeight) / 2,
            winOptions = 'width=' + winWidth + ',height=' + winHeight + ',top=' + winTop + ',left=' + winLeft;

        //open Popup window and redirect user to share website.
        window.open(openLink, 'Share This Link', winOptions);
        return false;
    });
});

$(document).on('click', vmWare.config.selectors.backAnswerSelector, function (e) {
    vmWare.helpers.setAnswer("");
    vmWare.functions.questionGrid();
});

$(document).on('click', vmWare.config.selectors.backAnswer, function (e) {
    vmWare.helpers.setAnswer("");
    vmWare.config.containers.answerGridContainer.hide();
    $(vmWare.config.selectors.submitAnswerSelector).hide();
    vmWare.config.containers.choiceContainer.show();
});

$(document).on('click', vmWare.config.selectors.moreQuestions, function (e) {
    vmWare.helpers.setAnswer("");
    vmWare.functions.questionGrid();
    if (totalQuestions == answeredQuestions.length) {
        $('body').append(vmWare.config.html.modalFinished);
        $('#modalFinished').modal('show');
    }
});

$(document).on('click', vmWare.config.selectors.tracking, function (e) {
    vmWare.helpers.gaq(this);
});

