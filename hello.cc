#include <nan.h>

#include "dog_api.h"
 
  

int32_t fun1(const char *vendor_code)
{
  const dog_feature_t feature = 2;

  dog_handle_t handle = DOG_INVALID_HANDLE_VALUE;

  dog_status_t status = dog_login(feature, vendor_code, &handle);
  if (status != DOG_STATUS_OK)
  {
    return 0;
  }
  else
  {
    return 1;
  }
}
void RunCallback(const Nan::FunctionCallbackInfo<v8::Value> &args)
{
  v8::Local<v8::Context> context = args.GetIsolate()->GetCurrentContext();
  v8::Isolate *isolate = args.GetIsolate();
  if (args.Length() < 1)
  {
    return;
  }
  else if (args[0]->IsNull())
  {
    return;
  }
  else if (args[0]->IsUndefined())
  {
    return;
  }
  else if (!args[0]->IsString())
  {
    // This clause would catch IsNull and IsUndefined too...
    return;
  }
  v8::String::Utf8Value str(isolate, args[0]);

  int32_t a = fun1((const char *)(*str));
  args.GetReturnValue().Set(a);
}

void Init(v8::Local<v8::Object> exports)
{
  v8::Local<v8::Context> context = exports->CreationContext();
  exports->Set(context,
               Nan::New("hello").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(RunCallback)
                   ->GetFunction(context)
                   .ToLocalChecked());
}

NODE_MODULE(addon, Init)