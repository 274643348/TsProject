#pragma once
#include "base/ccConfig.h"

#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"

extern se::Object* __jsb_jsbTest_proto;
extern se::Class* __jsb_jsbTest_class;

bool js_register_jsbTest(se::Object* obj);
bool register_all_jsbTest(se::Object* obj);
SE_DECLARE_FUNC(js_jsbTest_jsbTest_testlog);

