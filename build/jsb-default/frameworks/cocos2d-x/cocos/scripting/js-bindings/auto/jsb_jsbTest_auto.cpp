#include "scripting/js-bindings/auto/jsb_jsbTest_auto.hpp"
#include "scripting/js-bindings/manual/jsb_conversions.hpp"
#include "scripting/js-bindings/manual/jsb_global.h"
#include "jsbTest.h"

se::Object* __jsb_jsbTest_proto = nullptr;
se::Class* __jsb_jsbTest_class = nullptr;

static bool js_jsbTest_jsbTest_testlog(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        jsbTest::testlog();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsbTest_jsbTest_testlog)



static bool js_jsbTest_finalize(se::State& s)
{
    CCLOGINFO("jsbindings: finalizing JS object %p (jsbTest)", s.nativeThisObject());
    auto iter = se::NonRefNativePtrCreatedByCtorMap::find(s.nativeThisObject());
    if (iter != se::NonRefNativePtrCreatedByCtorMap::end())
    {
        se::NonRefNativePtrCreatedByCtorMap::erase(iter);
        jsbTest* cobj = (jsbTest*)s.nativeThisObject();
        delete cobj;
    }
    return true;
}
SE_BIND_FINALIZE_FUNC(js_jsbTest_finalize)

bool js_register_jsbTest_jsbTest(se::Object* obj)
{
    auto cls = se::Class::create("jsbTest", obj, nullptr, nullptr);

    cls->defineStaticFunction("testlog", _SE(js_jsbTest_jsbTest_testlog));
    cls->defineFinalizeFunction(_SE(js_jsbTest_finalize));
    cls->install();
    JSBClassType::registerClass<jsbTest>(cls);

    __jsb_jsbTest_proto = cls->getProto();
    __jsb_jsbTest_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

bool register_all_jsbTest(se::Object* obj)
{
    // Get the ns
    se::Value nsVal;
    if (!obj->getProperty("jsb", &nsVal))
    {
        se::HandleObject jsobj(se::Object::createPlainObject());
        nsVal.setObject(jsobj);
        obj->setProperty("jsb", nsVal);
    }
    se::Object* ns = nsVal.toObject();

    js_register_jsbTest_jsbTest(ns);
    return true;
}

